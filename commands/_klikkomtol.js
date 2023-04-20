/*CMD
  command: /klikkomtol
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: dah klik kembali sj v:
  keyboard: 🔙 Kembali
  aliases: 
CMD*/

var gdlib = Libs.Webhooks.getUrlFor({
  command: "/onGetResponse",
  user_id: user.id
})
Bot.inspect(gdlib)
