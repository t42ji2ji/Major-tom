const { LineHandler } = require('bottender');

const answers = require('./actions/answers');
const music = require('./actions/music');
const test = require('./actions/test');
const intro = require('./actions/intro');
const yee = require('./actions/yee');
const wallpaper = require('./actions/wallpaper');


const offreply = '如果你不知道做什麼\n可以輸入參考下面圖片的功能哦\n如果想了解我請輸入"dora"'

const init_hanlder = new LineHandler()
  .onText(/施工/, async context => {
    await context.replyText('我在快了啦')
  })
  .onText(/yee/i, yee)
  .onText(/問題/, async context => {
    context.setState({
        question_mode: true,
        in_mode: true
    })
    await context.replyText('請開始問問題');
  })
  .onText(/桌布/, async context => {
    await context.setState({
        wallpaper_mode: true,
        in_mode: true
    })
    await context.replyConfirmTemplate('this is a confirm template', {
      text: '桌布小公約\n1. 喜歡桌布可以放到限時動態標註我哦\n2. 桌布禁止一切商業使用\n3. 有其他使用上的問題都可以直接私訊IG哦',
      actions: [
        {
          type: 'message',
          label: '沒問題',
          text: '沒問題',
        },
        {
          type: 'message',
          label: '做不到',
          text: '做不到',
        },
      ],
    });
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
      console.log(datas[0].split('=')[1] == 'game');
      console.log(`1. 複製網址 ${datas[1].split('=')[1]}\n2. 貼到聊天室\n------------\n或者點右邊頭像 推薦本熊給好友哦`);
      if(datas[0].split('=')[1] == 'game'){
        await context.replyText(`1. 複製網址 ${datas[1].split('=')[1]}\n2. 貼到聊天室\n------------\n或者點右邊頭像 推薦本熊給好友哦`)
      }
    }
  })
  .build();

const question_handler = new LineHandler()
    .onText(/喜歡*/, async context =>{
      await context.replyText("說喜不喜歡還太早了啦 \uDBC0\uDC84");
    })
    .onText(/魔鏡魔鏡誰是世界上最美的人/, async context =>{
      await context.replyText("當然是我妹妹 \uDC84")
    })
    .onText(/結束*/, async context=>{
      await context.setState({
        question_mode: false,
        in_mode: false
      });
      const do_something = ["聽音樂", "玩遊戲", "去看看我的IG", "很久沒更新的部落格"]
      var random_index = Math.floor(Math.random()*do_something.length)
      await context.replyText(`問完問題以後，可以試試看${do_something[random_index]}哦`)
    })
    .onText(/a*/, answers)
    .onEvent(async context => {
        if (!context.event.isText) {
            await context.replyText('本熊只吃字');
        }
    })
    .build();

const wallper_handler = new LineHandler()
  .onText(/^[0-9]*$/, wallpaper)
  .onText(/沒問題/, wallpaper)
  .onText(/做不到/, async context =>{
    context.replyText('那88')
    context.setState({
        wallpaper_mode: false,
        in_mode: false
    })
  })
  .onEvent(async context => {
      if (!context.event.isText) {
          await context.replyText('本熊只吃字');
      }
  })
  .build();

module.exports = new LineHandler()
  .on(context => !context.state.in_mode, init_hanlder)
  .on(context => context.state.question_mode, question_handler)
  .on(context => context.state.wallpaper_mode, wallper_handler)
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