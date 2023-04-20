/*CMD
  command: /onBuatIklan1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buat Iklan

  <<ANSWER
Masukkan *Judul* Untuk Iklan Kamu:

Judul Harus Lebih Dari *5* Dan *20* Karakter.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (message.length < 5 || message.length > 20) {
  Bot.sendMessage(
    "Harap Masukkan Judul Yang Lebih Dari *5 Dan 20 Karakter.*"
  )
  Bot.run({
    command: "/onBuatIklan1",
    options: options
  })
  return
}
Bot.run({
  command: "/onBuatIklan2",
  options: {
    type: options.type,
    url: options.url,
    title: message
  }
})

