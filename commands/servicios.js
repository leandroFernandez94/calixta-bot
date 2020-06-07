import { servicios } from "../constants.js";

const SERVICIOS_CMD = 'servicios'

export default function applyServiciosListener(bot) {
  bot.command(SERVICIOS_CMD, (ctx) => ctx.reply(servicios))
}
