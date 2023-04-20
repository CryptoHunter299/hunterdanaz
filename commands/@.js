/*CMD
  command: @
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

function getString(value) {
  var val = parseFloat(value)
  var str = val.toLocaleString()
  var sli = str.split(",")
  for (var i in sli) {
    str = str.replace(",", ".")
  }
  return str
}
