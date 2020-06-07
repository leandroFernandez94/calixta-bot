const ESCULPIDAS_CMD = 'Uñas esculpidas'

const keyboardOptions = [
  ["Tengo uñas esculpidas"],
  ["Tengo mis uñas naturales"],
  ["Tengo semi y quiero uñas esculpidas"]
]

const replyMsg = `
Como es el estado de tus uñas?

<b>Realizamos uñas esculpidas en ACRÍLICO, no utilizamos ningún otro material</b>
`

export default function esculpidasCallbackListener(bot) {
  bot.hears(ESCULPIDAS_CMD, ctx => {
    console.log(ctx)
    ctx.reply(replyMsg, {parse_mode: "html", reply_markup: {keyboard: keyboardOptions}})
  })
}