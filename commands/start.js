import { start } from "../constants.js";

export default function applyStartListener(bot) {
  bot.start((ctx) => {
    ctx.reply(start(ctx.from.first_name))
  })
}
