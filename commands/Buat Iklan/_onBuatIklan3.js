/*CMD
  command: /onBuatIklan3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buat Iklan

  <<ANSWER
*♐ Berapa Banyak Jumlah Pengunjung Yang Kamu Inginkan*

Harga Per Pengunjung Rp20
⚠️ Minimal 10 Pengunjung
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var o = options
var myads = User.getProperty("my_ads")
var res = Libs.ResourcesLib.anotherUserRes("total", "iklan")
var usp = Libs.ResourcesLib.userRes("my_ads")
if (message < 10) {
  Bot.sendMessage("*❌ Minimal 10 Pengunjung!*")
  Bot.run({
    command: "/onBuatIklan3",
    options: o
  })
  return
}
if (o.type == "Bot Telegram") {
  res.add(1)
  usp.add(1)
  var py = myads ? myads : []
  var js = {
    type: "Bot Telegram",
    id: res.value().toFixed(),
    url: o.url.link,
    uid: o.url.uid,
    uname: o.url.uname,
    title: o.title,
    desc: o.desc,
    amo: message,
    stat: "Off"
  }
  py.push(js)
  User.setProperty("my_ads", py, "json")
  Bot.sendKeyboard(
    "🔙 Kembali",
    "*✅ Iklan Anda Berhasil Disimpan, Untuk Melihat Detail & Mengaktifkan Iklan, Silahkan Ke Menu Iklan Saya.*"
  )
  return
}

