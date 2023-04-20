/*CMD
  command: /setnodana
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*☑️ Masukkan Nomor DANA Anda*

_Nomor DANA Yang Anda Masukkan Dapat Digunakan Untuk Melakukan Withdraw._
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var value = message
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*❌ Nomor DANA Tidak Valid, Silahkan Coba Lagi.*")
} else {
  User.setProperty("wallet", message, "string")
  Bot.sendMessage("*✅ Nomor DANA Anda Berhasil Disimpan*")
}

