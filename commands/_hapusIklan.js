/*CMD
  command: /hapusIklan
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

if (!params) {
  return
}
var ads = User.getProperty("my_ads")
if (ads[params].stat == "On") {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text:
      "❌ Iklan Masih Dalam Keadaan Aktif, Harap Nonaktifkan Terlebih Dahulu Agar Dapat Menghapus Iklan!",
    show_alert: true
  })
  return
}
Api.deleteMessage({ message_id: request.message.message_id })
var usp = Libs.ResourcesLib.userRes("my_ads")
var ke = parseFloat(params) + 1
if (usp.value() == 1) {
  User.setProperty("my_ads", null)
} else {
  delete ads[params]
  var h1 = ads
  var h2 = JSON.stringify(h1)
  if (ke == usp.value()) {
    var h3 = h2.replace(",null", "")
  } else {
    var h3 = h2.replace("null,", "")
  }
  var h4 = JSON.parse(h3)
  User.setProperty("my_ads", h4, "json")
}
usp.remove(1)
Bot.sendMessage("*✅ Campaign Iklan #" + ke + " Berhasil Dihapus!*")

