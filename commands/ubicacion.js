import { getChatId } from "./commons.js"
import { direccion } from "../constants.js"

const COORDINATES = [-34.602307, -58.541995]
const UBICACION_CMD = /^\/ubicacion$/

export default function applyUbicacionListener(bot) {
  bot.onText(UBICACION_CMD, msg => {
    console.log('pidio ubicacion')
    const chatId = getChatId(msg)
    bot.sendMessage(chatId, direccion)
    bot.sendLocation(chatId, ...COORDINATES)
  })
}
