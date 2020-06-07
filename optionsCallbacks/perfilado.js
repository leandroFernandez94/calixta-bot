const PERFILADO_CMD = 'Perfilado de cejas y lifting de pestañas'

const keyboardOptions = [
  ["Perfilado de cejas"],
  ["Lifting de pestañas -SIN STOCK-"]
]

const replyMsg = `
¿Qué servicio deseas?

<b>Para coordinar día y horario, por último, escribí el o los servicios a realizar y aguardá por nuestra respuesta! Gracias!</b>
`

export default function perfiladoCallbackListener(bot) {
  bot.hears(PERFILADO_CMD, ctx => {
    ctx.reply(replyMsg, {parse_mode: "html", reply_markup: {keyboard: keyboardOptions}})
  })
}