import dotenv from 'dotenv'
import Telegraf from 'telegraf'
// import express from 'express'
import __dirname from './dirname.js'
import applyCommandListeners from './commands/index.js'
import applyCallbackOptionsListeners from './optionsCallbacks/index.js'

dotenv.config()
const {TELEGRAM_BOT_TOKEN: TOKEN, PORT, APP_URL, NODE_ENV} = process.env

let bot = null

bot = new Telegraf(TOKEN);

if (NODE_ENV !== 'development') {
  bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
  bot.startWebhook(`/bot${API_TOKEN}`, null, PORT)
}

applyCommandListeners(bot)
applyCallbackOptionsListeners(bot)

bot.launch()
