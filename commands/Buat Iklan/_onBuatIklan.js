/*CMD
  command: /onBuatIklan
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

if (message == "Iklan Bot Telegram") {
  Bot.sendKeyboard(
    "❌ Batalkan",
    "*🔎 Teruskan Sebuah Pesan Dari Bot Yang Ingin Diiklankan Ke Bot Ini.*\n\n-> Buka Bot Yang Ingin Kamu Promosikan.\n-> Pilih Salah Satu Pesan Dari Bot Tersebut Lalu Teruskan Ke Bot Ini."
  )
  Bot.run({
    command: "/buatIklan_botTele1"
  })
  return
}

