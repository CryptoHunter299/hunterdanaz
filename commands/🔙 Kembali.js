/*CMD
  command: 🔙 Kembali
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

var data = User.getProperty("data_kembali")
if (!data) {
  return
}
User.setProperty("data_kembali",null)
Bot.runCommand(data)
