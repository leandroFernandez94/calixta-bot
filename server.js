import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
import __dirname from './dirname.js'
import {horarios, servicios, direccion, metodosDePago} from './constants.js'

dotenv.config()
const {TELEGRAM_BOT_TOKEN: TOKEN, PORT, APP_URL} = process.env

const options = {
  webHook: {
    // Port to which you should bind is assigned to $PORT variable
    // See: https://devcenter.heroku.com/articles/dynos#local-environment-variables
    port: PORT
    // you do NOT need to set up certificates since Heroku provides
    // the SSL certs already (https://<app-name>.herokuapp.com)
    // Also no need to pass IP because on Heroku you need to bind to 0.0.0.0
  }
};

// Heroku routes from port :443 to $PORT
// Add URL of your app to env variable or enable Dyno Metadata
// to get this automatically
// See: https://devcenter.heroku.com/articles/dyno-metadata
const url = APP_URL || 'https://calixta-bot.herokuapp.com/';
const bot = new TelegramBot(TOKEN, options);


// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);


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
  bot.sendMessage(chatId, direccion)
  bot.sendLocation(chatId, -34.602307, -58.541995)
})

function getChatId(msg) {
  return msg.chat.id
}