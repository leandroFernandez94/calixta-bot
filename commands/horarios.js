import { horarios } from "../constants.js";
import { getChatId } from "./commons.js";
export const HORARIOS_CMD = /^\/horarios$/

export default function applyHorariosListener(bot) {
  bot.onText(HORARIOS_CMD, msg => {
    const chatId = getChatId(msg)
 
    bot.sendMessage(chatId, horarios);
  })
}
