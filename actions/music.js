module.exports = async (context, match) => {
    const musics = ["https://www.youtube.com/watch?v=3Y0Ut5ozaKs","https://www.youtube.com/watch?v=Dnj5Tcpev0Q","https://www.youtube.com/watch?v=m60hjpNtq5k","https://www.youtube.com/watch?v=c9PEYJdwdwI",
    "https://www.youtube.com/watch?v=Tt7vKpe_1NI",
    "https://www.youtube.com/watch?v=i7a8vwx3BPQ"]
    const intro = ["「越漂亮的女人越會騙人，電視攏有在講。」回過頭，我才慢慢瞭解。那些年少時的看破，和自以為擁有的愛情，都只是在浪流連。","像是每個男人都有過的曾經 每個世代都有的情感經歷 最偉大的愛情不是永遠 而是曾經在平凡生活裡有你有我的那些深刻","放你自由去啦是我不夠瞭解放你自由去啦是我不夠瞭解你想你點一支煙","我洗完澡，躺在床上等待著隔天完成這首歌，入睡後，我在夢裡遇到19歲的自己，他跟我說：「你沒有讓我失望」那是一個好夢。","這樣的故事或許唯美，或許帶著罪孽，不需要多餘的愧疚感，更不需要辯解，與我身子糾纏不清的鬼魅，那感受是如此的甜，道歉？懊悔？在翻雲覆雨的爽快中，都顯得太過虛偽。","長江任水流，江湖任你闖。不要以為你不努力可以在江湖做自己。兄弟們帶上革命的旗，用歌詞統治嘻哈的疆土。"]

    var random_index = Math.floor(Math.random()*musics.length)
    var random_music = musics[random_index];
    var random_intro = intro[random_index]
    const { userId, displayName } = context.session.user;
    console.log(userId + displayName);
    await context.replyText(`${random_intro}：\n${random_music}`);
  };