const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Salam'))

bot.on("message", (ctx) => ctx.reply(ctx.message.text))

bot.launch()
