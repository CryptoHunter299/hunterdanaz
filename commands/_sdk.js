/*CMD
  command: /sdk
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

var inl = [
  [
    {
      title: "📖 Baca Syarat & Ketentuan",
      url: "https://hunterdana.my.id/terms.php?id=" + user.telegramid
    }
  ],
  [
    {
      title: "✅ Saya Setuju Dengan Syarat & Ketentuan Yang Berlaku",
      command: "/setuju_sdk"
    }
  ]
]
Bot.setProperty("portal_verifikasi_" + user.telegramid, "boleh")
Bot.sendInlineKeyboard(
  inl,
  "*🖐 Sebelum Memulai Menghasilkan Uang, Kamu Harus Membaca & Menyetujui Syarat & Ketentuan Kami.*\n\nJika Kamu Sudah Membaca Syarat & Ketentuan Kami, Silahkan Klik Setuju."
)

