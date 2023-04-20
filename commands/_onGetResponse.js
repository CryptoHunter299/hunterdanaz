/*CMD
  command: /onGetResponse
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

if (!content) {
  return
}
var ct = JSON.parse(content)
if (!ct.user_id) {
  return
}
var us = ct.user_id
var ip = ct.ip
var iz = Bot.getProperty("portal_verifikasi_" + us)
if (!iz) {
  return
}

Bot.setProperty("portal_verifikasi_" + us, null)
Bot.setProperty("data_ip_" + us, ip, "string")
Bot.setProperty("setuju_sdk_" + us, "sudah")

