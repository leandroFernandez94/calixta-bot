import { metodosDePago } from "../constants.js";
import { getChatId } from "./commons.js";

const METODOS_CMD = /^\/metodos$/

export default function applyMetodosListener(bot) {
  bot.onText(METODOS_CMD, msg => {
    const chatId = getChatId(msg)
    bot.sendMessage(chatId, metodosDePago)
  })
}
