const CLASICO_CMD = 'Esmaltado clasico'

const keyboardOptions = [
  ["Tengo mis uñas naturales"],
  ["Tengo esmaltado hecho en casa"],
  ["Tengo semi"],
  ["Tengo esculpidas"]
]

const replyMsg = `
¿Cómo es el estado de tus uñas?
`

export default function clasicoCallbackListener(bot) {
  bot.hears(CLASICO_CMD, ctx => {
    ctx.reply(replyMsg, {parse_mode: "html", reply_markup: {keyboard: keyboardOptions}})
  })
}