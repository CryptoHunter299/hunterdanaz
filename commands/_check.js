/*CMD
  command: /check
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

Api.deleteMessage({ message_id: request.message.message_id })
Api.getChatMember({
  chat_id: "@HunterDana",
  user_id: user.telegramid,
  on_result: "/onCheck"
})

