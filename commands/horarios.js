import { horarios } from "../constants.js";
export const HORARIOS_CMD = 'horarios'

export default function applyHorariosListener(bot) {
  bot.command(HORARIOS_CMD, (ctx) => ctx.reply(horarios))
}
