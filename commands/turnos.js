const TURNOS_CMD = 'turnos'

const keyboardOptions = [
  ["Uñas esculpidas"],
  ["Esmaltado semipermanente"],
  ["Esmaltado clasico"],
  ["Perfilado de cejas y lifting de pestañas"],
  ["Retiro"]
]

export default function applyTurnosListener(bot) {
  bot.command(TURNOS_CMD, ctx => {
    ctx.reply('Selecciona na categoria de servicios',{reply_markup: {keyboard: keyboardOptions}})
  })
}