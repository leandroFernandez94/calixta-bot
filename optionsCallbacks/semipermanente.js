const SEMI_CMD = 'Esmaltado semipermanente'

const keyboardOptions = [
  ["Tengo semi y quiero hacerlo de nuevo"],
  ["Tengo mis uñas naturales"],
  ["Tengo uñas esculpidas"]
]

const replyMsg = `
¿Cómo es el estado de tus uñas?

<b>ATENCIÓN: Los precios a continuación son valores para esmaltado semipermanente en manos. Si querés este servicio en tus uñas de los pies, el costo final son $50 extra.</b>
`

export default function semipermanenteCallbackListener(bot) {
  bot.hears(SEMI_CMD, ctx => {
    ctx.reply(replyMsg, {parse_mode: "html", reply_markup: {keyboard: keyboardOptions}})
  })
}