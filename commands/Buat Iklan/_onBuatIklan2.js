/*CMD
  command: /onBuatIklan2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buat Iklan

  <<ANSWER
Masukkan *Deskripsi* Untuk Iklan Kamu:

Deskripsi Harus Lebih Dari *10 Dan 180 Karakter.*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (message.length < 10 || message.length > 180) {
  Bot.sendMessage(
    "Harap Masukkan Deskripsi Yang Lebih Dari *10 Dan 180 Karakter.*"
  )
  Bot.run({
    command: "/onBuatIklan2",
    options: options
  })
  return
}
Bot.run({
  command: "/onBuatIklan3",
  options: {
    type: options.type,
    url: options.url,
    title: options.title,
    desc: message
  }
})

