import dotenv from 'dotenv'
import Telegraf from 'telegraf'
import applyCommandListeners from './commands/index.js'
import applyCallbackOptionsListeners from './optionsCallbacks/index.js'

dotenv.config()
const {TELEGRAM_BOT_TOKEN: TOKEN, TELEGRAM_TEST_BOT_TOKEN: TEST_TOKEN, PORT, APP_URL, NODE_ENV} = process.env

let bot = null

if (NODE_ENV !== 'development') {
  bot = new Telegraf(TOKEN);
  bot.telegram.setWebhook(`${APP_URL}/bot${TOKEN}`);
  bot.startWebhook(`/bot${TOKEN}`, null, PORT)
} else {
  bot = new Telegraf(TEST_TOKEN);
}

applyCommandListeners(bot)
applyCallbackOptionsListeners(bot)

bot.launch()
