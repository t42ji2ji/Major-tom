const {
  LineBot,
  ConsoleBot,
  MongoSessionStore
} = require('bottender');
const {
  createServer
} = require('bottender/express');

const config = require('./bottender.config.js').line;
const handler = require('./handler');


const useConsole = false;
const bot = useConsole ?
  new ConsoleBot({
    fallbackMethods: true,
    sessionStore: new MongoSessionStore(
      'mongodb://heroku_34smc82j:836jqr8ffo6erv8ngmc6h32afn@ds249233.mlab.com:49233/heroku_34smc82j', {
        collectionName: 'session',
      }
    )
  }) :
  new LineBot({
    accessToken: config.accessToken,
    channelSecret: config.channelSecret,
    sessionStore: new MongoSessionStore(
      'mongodb://heroku_34smc82j:836jqr8ffo6erv8ngmc6h32afn@ds249233.mlab.com:49233/heroku_34smc82j', {
        collectionName: 'session',
      }, 10
    )
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