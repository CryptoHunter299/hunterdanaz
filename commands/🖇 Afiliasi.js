/*CMD
  command: 🖇 Afiliasi
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

var link = Libs.ReferralLib.getLink()
Bot.sendMessage("*✅ Link Referral Anda: "+link+"*\n\nAnda Akan Menerima Saldo Withdrawable Rp50 Jika Referral Anda Valid.\n\nAnda Juga Akan Mendapatkan Saldo Withdrawable Sebesar 0,5% Dari Jumlah Deposit Referral Anda")
