/*CMD
  command: 📊 Iklan Saya
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

var myads = User.getProperty("my_ads")
if (!myads) {
  Bot.sendMessage("*❌ Anda Tidak Memiliki Campaign Iklan Apapun...*")
  return
}
for (var i in myads) {
  if (myads[i] != null) {
    var typ = myads[i].type
    if (myads[i].stat == "Off") {
      var tit = "✅ Aktivasi Iklan"
      var st = "❌ Nonaktif"
    } else {
      var tit = "❌ Nonaktifkan Iklan"
      var st = "✅ Aktif"
    }
    var inl = [
      [{ title: tit, command: "/iklanStat " + i }],
      [{ title: "🗑 Hapus Iklan", command: "/hapusIklan " + i }]
    ]
    var am = Libs.ResourcesLib.anotherUserRes("pengunjung", myads[i].id)
    var jum = parseFloat(i) + 1
    Bot.sendInlineKeyboard(
      inl,
      "*📊 Campaign Iklan #" +
        jum +
        "*\n\n*📚 Tipe:* `" +
        myads[i].type +
        "`\n*✉️ Judul:* `" +
        myads[i].title +
        "`\n*📑 Deskripsi:* `" +
        myads[i].desc +
        "`\n*🔗 URL:* `" +
        myads[i].url +
        "`\n*👷‍♂ Total Pengunjung:* `" +
        myads[i].amo +
        "`\n\n*ℹ️ Status: " +
        st +
        "*\n*▶️ Pengunjung: " +
        am.value().toFixed() +
        "*"
    )
  }
}

