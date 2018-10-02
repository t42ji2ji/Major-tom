const { LineHandler } = require('bottender');

const answers = require('./actions/answers');
const offreply = '如果你不知道做什麼\n可以輸入"我要問問題"\n我可以幫你回答\n輸入"yee"\n查看本實驗室的最新實驗'

const init_hanlder = new LineHandler()
  .onText(/yee/i, async context => {
    await context.replyText('誰是畢卡索0x100085 \n可以畫貼圖送給朋友，並且實驗室會替你估價哦\nline://app/1611085252-Rl9xjJEY\n使用方法：\n1. 複製你喜歡的實驗室產品網址\n2. 貼到任何一個聊天室\n3. 點擊網址開始使用');
  })
  .onText(/問題/, async context => {
    context.setState({
        question_mode: true
    })
    await context.replyText('請開始問問題');
  }).onText(/a*/, async context => {
    await context.replyText(offreply);
  })
  .build();

const question_handler = new LineHandler()
    .onText(/a*/, answers)
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