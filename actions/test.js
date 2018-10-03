module.exports = async (context, match) => {
    await context.replyTemplate('this is a template', {
        type: 'buttons',
        thumbnailImageUrl: 'https://instagram.ftpe7-4.fna.fbcdn.net/vp/318368bf86d4319caf5b7277fbb7b471/5C62ACB2/t51.2885-19/s150x150/34821010_473344549764167_372576923890483200_n.jpg',
        title: 'Menu',
        text: 'Please select',
        actions: [
          {
            type: 'postback',
            label: 'Buy',
            data: 'action=buy&itemid=123',
          },
          {
            type: 'postback',
            label: 'Add to cart',
            data: 'action=add&itemid=123',
          },
          {
            type: 'uri',
            label: 'View detail',
            uri: 'http://example.com/page/123',
          },
        ],
      });
  };