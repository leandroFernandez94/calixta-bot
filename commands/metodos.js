import { metodosDePago } from "../constants.js";

const METODOS_CMD = 'metodos'

export default function applyMetodosListener(bot) {
  bot.command(METODOS_CMD, (ctx) => ctx.reply(metodosDePago))
}
