/*CMD
  command: 👤 Profile
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

var bal = Libs.ResourcesLib.userRes("balance")
var hp = Libs.ResourcesLib.userRes("hunterpay")
if (!User.getProperty("wallet")) {
  var no = "❌ Belum Diatur"
} else {
  var no = User.getProperty("wallet")
}
var inl = [{ title: "➕ Atur Nomor DANA", command: "/setnodana" }]
Bot.sendInlineKeyboard(
  inl,
  "*👋 Halo " +
    user.first_name +
    ". Berikut Adalah Detail Tentang Anda:*\n\n*👤 Nama:* `" +
    user.first_name +
    "`\n*🆔 User ID:* `" +
    user.telegramid +
    "`\n*🧾 Nomor DANA:* `" +
    no +
    "`\n\n*💰 Withdrawable:* `Rp" +
    getString(bal.value().toFixed()) +
    "`\n*💎 HunterPay:* `Rp" +
    getString(bal.value().toFixed()) +
    "`"
)

