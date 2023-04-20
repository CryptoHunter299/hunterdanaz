/*CMD
  command: ➕ Iklan Baru
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

User.setProperty("data_kembali", "📊 Buat Iklan")
var usp = Libs.ResourcesLib.userRes("my_ads")
if (usp.value() > 4) {
  Bot.sendMessage("*❌ Batas Maksimal Iklan Anda Adalah 5.*")
} else {
  Bot.sendKeyboard(
    "Iklan Bot Telegram,\nIklan Channel/Grup Telegram,\nIklan Postingan Channel Publik,\nIklan Link Website,\n❌ Batalkan",
    "*Apa Yang Ingin Kamu Promosikan?*\n\nPilih Salah Satu Opsi Dibawah Ini...👇🏻"
  )
  Bot.runCommand("/onBuatIklan")
}

