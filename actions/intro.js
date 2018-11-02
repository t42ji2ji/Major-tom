module.exports = async (context, match) => {
    await context.replyTemplate('this is a template', {
        type: 'buttons',
        thumbnailImageUrl: 'https://instagram.ftpe7-4.fna.fbcdn.net/vp/948beb7aee8710b3aadf904a2cd13533/5C547A48/t51.2885-15/e35/33630528_178973942809157_3426440959318032384_n.jpg',
        title: 'Doraralab',
        text: '實驗室的室長本人，用盡全力改變世界',
        actions: [
          {
            type: 'uri',
            label: 'Medium文章',
            uri: 'https://medium.com/%E5%93%86%E5%95%A6%E5%AF%A6%E9%A9%97%E5%AE%A4',
          },
          {
            type: 'uri',
            label: 'FB粉絲專頁',
            uri: 'https://www.facebook.com/doraralab/',
          },
          {
            type: 'uri',
            label: '追蹤IG',
            uri: 'https://www.instagram.com/doraralab/',
          },
        ],
      });
  };