const { LineBot } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config.js').line;

const bot = new LineBot({
  accessToken: config.accessToken,
  channelSecret: config.channelSecret,
});

bot.onEvent(async context => {
  await context.replyText('Hello World');
});

const server = createServer(bot);

server.listen(process.env.PORT || 5000, () => {
  console.log('server is running on 5000 port...');
});
