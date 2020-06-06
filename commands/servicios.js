import { servicios } from "../constants.js";
import { getChatId } from "./commons.js";

const SERVICIOS_CMD = /^\/servicios$/

export default function applyServiciosListener(bot) {
  bot.onText(SERVICIOS_CMD, msg => {
    const chatId = getChatId(msg)
 
    bot.sendMessage(chatId, servicios);
  })
}
