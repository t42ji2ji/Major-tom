module.exports = async (context, match) => {
    const { userId, displayName } = context.session.user;
    await context.replyCarouselTemplate('this is a carousel template', [
        {
            thumbnailImageUrl: 'https://scontent-tpe1-1.cdninstagram.com/vp/3399b5c3c2e86535f941525ac04874be/5C514611/t51.2885-15/e35/40509674_533884967035508_7294787328887904438_n.jpg',
            title: '我是畢卡索',
            text: '跟朋友一起比賽畫畫',
            actions: [
              {
                type: 'postback',
                label: '分享給朋友玩',
                data: 'action=game&itemid=line://app/1611085252-Rl9xjJEY',
              },
              {
                type: 'uri',
                label: '開始玩',
                uri: 'line://app/1611085252-Rl9xjJEY',
              },
            ],
        },
        {
          thumbnailImageUrl: 'https://i.imgur.com/N3ntSAP.png',
          title: '2048',
          text: '最紅的益智小遊戲',
          actions: [
            {
              type: 'postback',
              label: '分享給朋友玩',
              data: 'action=game&itemid=line://app/1612288634-0kXY3QDJ',
            },
            {
              type: 'uri',
              label: '開始玩',
              uri: 'line://app/1612288634-0kXY3QDJ',
            },
          ],
        },
      ]);
      
  };