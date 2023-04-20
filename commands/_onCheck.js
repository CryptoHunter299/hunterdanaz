/*CMD
  command: /onCheck
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

var user = options.result.status
if (user == "member" || user == "administrator" || user == "creator") {
  Bot.runCommand("/sdk")
  User.addToGroup("user")
}

if (user == "left") {
  Bot.sendMessage("*❌ Anda Belum Join Channel @HunterDana!!*")
  Bot.runCommand("/start")
}

