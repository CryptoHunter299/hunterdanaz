/*CMD
  command: /onDeposit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (!content) {
  return
}
var ct = JSON.parse(content)
var uid = ct.userid
var jum = ct.jumlah
var met = ct.metode
var plug = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })
var date = Libs.DateTimeFormat.format(plug, "dd/mm/yyyy HH:MM")
var id = Libs.ResourcesLib.anotherUserRes("topup", "id")
var inl = [
  [{ text: "📨 Unggah Bukti Pembayaran", callback_data: "/uploadDepo" }],
  [{ text: "❕ Komplain ❕", callback_data: "/komplainDepo" }]
]

if (met == "qris") {
  id.add(1)
  var fee = (2 / 100) * parseFloat(jum)
  var total = parseFloat(jum) + parseFloat(fee.toFixed())
  Api.sendPhoto({
    chat_id: uid,
    photo: "https://telegra.ph/file/8938d9e97488163cc8f16.jpg",
    caption:
      "*📃 Rincian Deposit #" +
      id.value().toFixed() +
      "*\n\n*📆 Tanggal:* `" +
      date +
      "`\n*💵 Jumlah:* `Rp" +
      getString(jum) +
      "`\n*💳 Metode Pembayaran:* `QRIS`\n\n*💰 Jumlah Deposit:* `Rp" +
      getString(jum) +
      "`\n*💎 Biaya Admin:* `Rp" +
      getString(fee.toFixed()) +
      " (2%)`\n*💸 Total Bayar:* `Rp" +
      getString(total) +
      "`\n\n_✅ Silahkan Bayar Ke QRIS Diatas, Jika Sudah Bayar, Unggah Bukti Pembayarannya._",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: inl }
  })
  return
}
if (met == "pulsa") {
  Api.sendMessage({
    chat_id: uid,
    text: "*❌ Mohon Maaf, Metode Deposit Pulsa Sedang Tidak Bisa*",
    parse_mode: "Markdown"
  })
  return
 }

