/*CMD
  command: /mainMenuBot
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ❌ batalkan
CMD*/

if (!Bot.getProperty("data_ip_" + user.telegramid)) {
  return
}
Bot.sendKeyboard(
  "👤 Profile,📚 Task,\n📥 Deposit,🏪 Market,📤 Withdraw,\n🖇 Afiliasi,➡️ Menu Lainnya",
  "*👋 Halo, " + user.first_name + ". Selamat Datang Di Bot Hunter DANA!*"
)

