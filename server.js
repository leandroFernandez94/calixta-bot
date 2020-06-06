import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
import __dirname from './dirname.js'
import {horarios, servicios, direccion} from './constants.js'

dotenv.config()
const token = process.env.TELEGRAM_BOT_TOKEN

console.log(__dirname)

const bot = new TelegramBot(token, {polling: true});
 
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

bot.onText(/^\/ubicacion$/, (msg) => {
  const chatId = getChatId(msg)
  console.log('requested location', chatId)
  bot.sendMessage(chatId, direccion)
  bot.sendLocation(chatId, -34.602307, -58.541995)
})

function getChatId(msg) {
  return msg.chat.id
}