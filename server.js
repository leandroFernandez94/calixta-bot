import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
import __dirname from './dirname.js'
import applyCommandListeners from './commands/index.js'

dotenv.config()
const {TELEGRAM_BOT_TOKEN: TOKEN, PORT, APP_URL, NODE_ENV} = process.env

let bot = null

if (NODE_ENV === 'development') {
  bot = new TelegramBot(TOKEN, {polling: true});
} else {
  const options = {
    webHook: {
      port: PORT
    }
  };
  
  const url = APP_URL || 'https://calixta-bot.herokuapp.com/';
  bot = new TelegramBot(TOKEN, options);
  bot.setWebHook(`${url}/bot${TOKEN}`);
}

applyCommandListeners(bot)
