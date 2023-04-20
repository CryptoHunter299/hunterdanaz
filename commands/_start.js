/*CMD
  command: /start
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

var inl = [{ title: "✅ Sudah Join", command: "/check" }]
Bot.sendInlineKeyboard(
  inl,
  "*🖐 Halo " +
    user.first_name +
    "*\n\nSebelum Kamu Join Bot Ini, Silahkan Join Channel @HunterDana Terlebih Dahulu.\n\nJika Sudah, Klik Tombol Dibawah Ini."
)
  function doTouchOwnLink() {
    Bot.sendMessage(
      "❌ Kamu Tidak Dapat Menggunakan Link Referral Kamu Sendiri!"
    )
  }

  function doAttracted(refUser) {
    Bot.sendMessage("*ℹ️ Kamu Telah Diundang Oleh " + refUser.first_name + "*")

    Bot.sendMessageToChatWithId(
      refUser.telegramid,
      "*✅ Yeay, " +
        user.first_name +
        " Baru Saja Bergabung Bot Hunter Dana Menggunakan Link Referral Anda!\n\nAnda Akan Menerima Rp50 Jika Referral Mu Sudah Melakukan Verifikasi.*"
    )
    User.setProperty("myReff", refUser, "json")
  }

  function doAlreadyAttracted() {
    if (params) {
    Bot.sendMessage("*❌ Kamu Sudah Terdaftar Di Bot Hunter Dana!*")
  }
  }

  let trackOptions = {
    onTouchOwnLink: doTouchOwnLink,
    onAttracted: doAttracted,
    onAlreadyAttracted: doAlreadyAttracted
  }

  Libs.ReferralLib.track(trackOptions)

