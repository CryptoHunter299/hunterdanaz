/*CMD
  command: /setuju_sdk
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

var cek = Bot.getProperty("setuju_sdk_" + user.telegramid)
var ref = User.getProperty("myReff")
if (!cek) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "❌ Kamu Belum Membaca Syarat & Ketentuan Kami!",
    show_alert: true
  })
  return
}
Api.deleteMessage({ message_id: request.message.message_id })
Bot.setProperty("setuju_sdk_" + user.telegramid, null)

function boleh() {
  Bot.setProperty("data_chatid_" + user.telegramid, chat.id, "string")
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "✅ Terimakasih Telah Menyetujui Syarat & Ketentuan Bot Kami.",
    show_alert: true
  })
  Bot.runCommand("/mainMenuBot")
}

if (!ref) {
  boleh()
  return
}
var ref_ip = Bot.getProperty("data_ip_" + ref.telegramid)
var my_ip = Bot.getProperty("data_ip_" + user.telegramid)
var ref_id = Bot.getProperty("data_chatid_" + ref.telegramid)

if (my_ip == ref_ip) {
  Bot.sendMessage(
    "*Katanya Setuju Syarat & Ketentuan? Kok Nuyul Sih. 🗿*\n\nMakanya Dibaca Syarat Ketentuannya. Akun Anda & Akun Pemberi Referral Telah Dibanned Dari Bot Hunter DANA."
  )
  Api.sendMessage({
    chat_id: ref.telegramid,
    text:
      "*Katanya Setuju Syarat & Ketentuan? Kok Nuyul Sih. 🗿*\n\nMakanya Dibaca Syarat Ketentuannya. Akun Anda & Akun Pemberi Referral Telah Dibanned Dari Bot Hunter DANA.",
    parse_mode: "Markdown"
  })
  Bot.blockChat(chat.id)
  Bot.blockChat(ref_id)
} else {
  var bal = Libs.ResourcesLib.anotherUserRes("balance")
  bal.add(50)
  Api.sendMessage({
    chat_id: ref.telegramid,
    text: "*✅ Referral Mu Telah Melakukan Verifikasi, Anda Menerima Rp50!*",
    parse_mode: "Markdown"
  })
  boleh()
}

