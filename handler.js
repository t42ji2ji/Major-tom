const { LineHandler } = require('bottender');

const answers = require('./actions/answers');
const music = require('./actions/music');
const test = require('./actions/test');
const intro = require('./actions/intro');
const yee = require('./actions/yee');

const offreply = '如果你不知道做什麼\n可以輸入"我要問問題"\n我可以幫你回答\n----------\n輸入"yee"\n查看本實驗室的最新實驗\n想了解更多請輸入"dora"'

const init_hanlder = new LineHandler()
  .onText(/yee/i, yee)
  .onText(/問題/, async context => {
    context.setState({
        question_mode: true
    })
    await context.replyText('請開始問問題');
  })
  .onText(/dora/, intro)
  .onText(/2048/, async context => {
    await context.replyText("line://app/1612288634-0kXY3QDJ");
  })
  .onText(/音樂/, music)
  .onText('test', test)
  .onText(/a*/, async context => {
    await context.replyText(offreply);
  })
  .onEvent(async context =>{
    if(context.event.isPostback){
      console.log("in POSTBACK", context.event.postback['data']);
      const datas = context.event.postback['data'].split('&')
      if(datas[0].split('=')[1] == 'game'){
        await replyText(`1. 複製網址${datas[1].split('=')[1]}\n2. 貼到聊天室\n------------\n歡迎點右邊頭像 推薦本熊給好友哦`)
      }
    }
  })
  .build();

const question_handler = new LineHandler()
    .onText(/a*/, answers)
    .onText(/喜歡*/, async context =>{
        await context.replyText("說喜不喜歡還太早了啦 \uDBC0\uDC84");
    })
    .onEvent(async context => {
        if (!context.event.isText) {
            await context.replyText('本熊只吃字');
        }
    })
    .build();

module.exports = new LineHandler()
  .on(context => !context.state.question_mode, init_hanlder)
  .on(context => context.state.question_mode, question_handler)
  .build();




//   .onEvent(async context => {
//     if (context.event.isFollow) {
//       await context.replyText(offreply);
//     } else if (context.event.isText) {
//       if (context.event.text === '1') {
//         await context.replyText('0x100084 功能 1');
//       } else if (context.event.text === '2') {
//         await context.replyText('功能 2');
//       } else if (context.event.text === '3') {
//         await context.replyText('功能 3');
//       } else if(context.event.text.include("問題")) {
//         await context.replyText('請開始發問');
//       }else {
//         await context.replyText(offreply);
//       }
//   } 
// });