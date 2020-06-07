import { getChatId } from "./commons.js"
import { direccion } from "../constants.js"

const COORDINATES = [-34.602307, -58.541995]
const UBICACION_CMD = 'ubicacion'

export default function applyUbicacionListener(bot) {
  bot.command(UBICACION_CMD, (ctx) => {
    ctx.replyWithLocation(...COORDINATES)
    ctx.reply(direccion)
  })
}
