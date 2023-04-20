/*CMD
  command: /buatIklan_botTele1
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

if (!request.forward_from) {
  Bot.sendMessage(
    "Maaf, Ini Bukan Pesan Terusan Yang Valid.\n\nMohon Teruskan Pesan Yang *Baru* Dari Bot Yang Ingin Kamu Promosikan Ke Bot Ini."
  )
  Bot.run({
    command: "/buatIklan_botTele1"
  })
  return
}
var id = request.forward_from.id
var uname = request.forward_from.username
var sebenar = uname.toLowerCase()
if (uname && sebenar.includes("bot")) {
  Bot.sendMessage("Masukkan URL Refferal Kamu Atau URL Bot *@" + uname + "*")
  Bot.run({
    command: "/buatIklan_botTele2",
    options: {
      uid: id,
      uname: uname
    }
  })
  return
}
Bot.run({
  command: "/buatIklan_botTele1"
})
Bot.sendMessage(
  "*⚠️ Pesan Yang Kamu Kirim Bukan Pesan Terusan\n🙏 Harap Teruskan Pesan Dari Bot Yang Ingin Kamu Promosikan*"
)

