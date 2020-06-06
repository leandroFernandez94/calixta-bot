import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
import __dirname from './dirname.js'
import express from 'express'
import {horarios, servicios, direccion, metodosDePago} from './constants.js'

dotenv.config()
const token = process.env.TELEGRAM_BOT_TOKEN

const bot = new TelegramBot(token, {polling: true});

const app = express()

app.get('/', (req, res) => res.send('running'))

app.listen(8080, () => console.log('running on port 8080'))
 
// Matches "/echo [whatever]"
bot.onText(/^\/horarios$/, (msg, match) => {
  const chatId = getChatId(msg)
 
  bot.sendMessage(chatId, horarios);
})

// Matches "/echo [whatever]"
bot.onText(/^\/servicios$/, (msg, match) => {
  const chatId = getChatId(msg)
 
  bot.sendMessage(chatId, servicios);
})

bot.onText(/^\/foto$/, (msg) => {
  const chatId = getChatId(msg)
  const photo = `${__dirname}/fotos/failed.png`;
  bot.sendPhoto(chatId, photo, {
    caption: "Salu"
  });
})

bot.onText(/^\/metodos$/, (msg) => {
  const chatId = getChatId(msg)
  bot.sendMessage(chatId, metodosDePago)
})

bot.onText(/^\/ubicacion$/, (msg) => {
  const chatId = getChatId(msg)
  console.log('requested location', chatId)
  bot.sendMessage(chatId, direccion)
  bot.sendLocation(chatId, -34.602307, -58.541995)
})

function getChatId(msg) {
  return msg.chat.id
}