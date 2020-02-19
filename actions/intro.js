module.exports = async (context, match) => {
  await context.replyTemplate('this is a template', {
    type: 'buttons',
    thumbnailImageUrl: 'https://i.imgur.com/5s1aSPM.png',
    title: 'Doraralab',
    text: '實驗室的室長本人，一點一滴改變世界',
    actions: [{
        type: 'uri',
        label: 'Medium文章',
        uri: 'https://medium.com/%E5%93%86%E5%95%A6%E5%AF%A6%E9%A9%97%E5%AE%A4',
      },
      {
        type: 'uri',
        label: '追蹤IG',
        uri: 'https://www.instagram.com/doraralab/',
      },
    ],
  });
};