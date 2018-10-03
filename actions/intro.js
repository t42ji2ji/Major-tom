module.exports = async (context, match) => {
    await context.replyTemplate('this is a template', {
        type: 'buttons',
        thumbnailImageUrl: 'https://instagram.ftpe7-4.fna.fbcdn.net/vp/318368bf86d4319caf5b7277fbb7b471/5C62ACB2/t51.2885-19/s150x150/34821010_473344549764167_372576923890483200_n.jpg',
        title: 'Doraralab',
        text: '喜愛程式與設計，提供世界好用又好看的服務。',
        actions: [
          {
            type: 'postback',
            label: '粉絲專頁',
            data: 'https://www.facebook.com/doraralab/',
          },
          {
            type: 'uri',
            label: '追蹤IG',
            uri: 'https://www.instagram.com/doraralab/',
          },
        ],
      });
  };