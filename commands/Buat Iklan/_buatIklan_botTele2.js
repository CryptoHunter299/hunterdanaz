/*CMD
  command: /buatIklan_botTele2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buat Iklan

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var bot_name = options.uname
if (message && message.includes(bot_name)) {
  Bot.run({
    command: "/onBuatIklan1",
    options: {
      type: "Bot Telegram",
      url: {
        link: message,
        uid: options.uid,
        uname: options.uid
      }
    }
  })
  return
}
Bot.sendMessage(
  "Link Ini Bukan Link Dari *@" +
    bot_name +
    "*\n\nHarap Kirimkan Link Yang Kamu Dapat Dari Bot *@" +
    bot_name +
    "*"
)
Bot.run({
  command: "/buatIklan_botTele2",
  options: options
})

