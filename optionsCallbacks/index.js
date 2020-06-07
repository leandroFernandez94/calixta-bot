const OPTIONS_CMD = /Uñas esculpidas|Esmaltado semipermanente|Esmaltado clasico|Perfilado de cejas y lifting de pestañas|Retiro/

function turnosCallbackListener(bot) {
  bot.hears(OPTIONS_CMD, ctx => {
    ctx.reply('OK Gracias!', {reply_markup: {remove_keyboard: true}})
  })
}

const callbacks = [turnosCallbackListener]

export default function applyCallbackOptionsListeners(bot) {
  callbacks.forEach(c => c(bot))
}