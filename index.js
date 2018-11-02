const { LineBot, ConsoleBot } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config.js').line;
const handler = require('./handler');

const useConsole = true;
const bot = useConsole
  ? new ConsoleBot({ fallbackMethods: true })
  : new LineBot({
      accessToken: config.accessToken,
      channelSecret: config.channelSecret,
    });

bot.setInitialState({
  in_mode: false,
  question_mode: false,
  wallpaper_mode: false
})

bot.onEvent(handler)

if (useConsole) {
  bot.createRuntime();
} else {
  const server = createServer(bot);
  const port = process.env.PORT || 5000;
  server
    .listen(port, () => {
      console.log(`server is running on ${port} port...`);
    });
}