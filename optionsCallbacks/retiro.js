const RETIRO_CMD = 'Retiro'

const keyboardOptions = [
  ["Retiro Semipermanente"],
  ["Retiro esculpidas"],
  ["Retiro de esmalte común"],
  ["Retiro de semi c/belleza express"],
  ["Retiro de esculpida c/belleza express"]
]

const replyMsg = `
¿Qué servicio deseas?

<b>Para coordinar día y horario, por último, escribí el o los servicios a realizar y aguardá por nuestra respuesta! Gracias!</b>
`

export default function retiroCallbackListener(bot) {
  bot.hears(RETIRO_CMD, ctx => {
    ctx.reply(replyMsg, {parse_mode: "html", reply_markup: {keyboard: keyboardOptions}})
  })
}