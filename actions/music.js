module.exports = async (context, match) => {
  const musics = [
    ["浪流連", "https://www.youtube.com/watch?v=3Y0Ut5ozaKs", "「越漂亮的女人越會騙人，電視攏有在講。」回過頭，我才慢慢瞭解。那些年少時的看破，和自以為擁有的愛情，都只是在浪流連。"],
    ["年少有為", "https://www.youtube.com/watch?v=Dnj5Tcpev0Q", "像是每個男人都有過的曾經 每個世代都有的情感經歷 最偉大的愛情不是永遠 而是曾經在平凡生活裡有你有我的那些深刻"],
    ["想你點煙","https://www.youtube.com/watch?v=m60hjpNtq5k", "放你自由去啦是我不夠瞭解放你自由去啦是我不夠瞭解你想你點一支煙"],
    ["長途夜車","https://www.youtube.com/watch?v=c9PEYJdwdwI", "我洗完澡，躺在床上等待著隔天完成這首歌，入睡後，我在夢裡遇到19歲的自己，他跟我說：「你沒有讓我失望」那是一個好夢。"],
    ["小老婆", "https://www.youtube.com/watch?v=Tt7vKpe_1NI", "這樣的故事或許唯美，或許帶著罪孽，不需要多餘的愧疚感，更不需要辯解，與我身子糾纏不清的鬼魅，那感受是如此的甜，道歉？懊悔？在翻雲覆雨的爽快中，都顯得太過虛偽。"],
    ["江湖流", "https://www.youtube.com/watch?v=i7a8vwx3BPQ", "長江任水流，江湖任你闖。不要以為你不努力可以在江湖做自己。兄弟們帶上革命的旗，用歌詞統治嘻哈的疆土。"],
    ["披星戴月的想你", "https://www.youtube.com/watch?v=N0t0HT7Eh1c", "星空鋪上天空，再染上月色，每天每天我就這樣披星戴月的想你。"],
    ["董小姐", "https://www.youtube.com/watch?v=AG8HtuOjkH0", "董小姐是你也是我，每個人都是情人故事裡的董小姐，董小姐也許覺得自己普通又無趣，但是在我眼裡你是最多情可愛的那一個。"],
    ["人生いきあたりばったり", "https://www.youtube.com/watch?v=HlbnHpJsL2I", "偶然從【深夜食堂 】裡面聽到的歌曲，第一次完全聽不懂歌詞但是頭仍跟著點了起來，上網搜尋才發現要找到這首歌還真的不容易，在 youtube 上只有現場演唱的版本，Apple music也只有日本商店才有賣這首歌，因為特別稀有所以每次聽到原曲都覺得好珍貴。"],
    ["有無", "https://www.youtube.com/watch?v=vz20uZMzHMg", "入圍2018年度金曲之一，最後敗給盧廣仲的<魚仔>(但我個人已經頒給林生祥了)，是大佛普拉斯的片尾曲，在這首歌之前其實不怎麼認識林生祥這個人，但是他用他的自身的經歷、樸質的聲音，讓整首歌染上台灣土地的味道。"],
    ["擱淺的人", "https://www.youtube.com/watch?v=NhJCYJs0XIA", "很猶豫要不要放上這首歌，因為她最近點閱剛破百萬可能很多人聽過了，但是實在太喜歡了，直白到要撕裂你的歌詞，嘶吼的嗓音句句直擊你的靈魂，我們都是擱淺的人，累到爆的夜晚<擱淺的人>是能讓你再來一發的威爾剛啊。"],
    ["開店歌", "https://youtu.be/jZzzwd_CDQM", "第一次聽到這首歌真的以為是伍佰的新歌，無妄合作社厭世的嗓音跟他的台式咬字，無奈但是仍必須繼續走，夜晚昏暗的路燈，彷彿歌詞裡的主角就是自己，只剩下寂寞陪著我。"],
    ["彩虹", "https://www.youtube.com/watch?v=7WQFI_wiEIk", "五月天！你沒看錯是五月天，即使現在很多粉絲抱怨五月天成了商業歌曲代名詞，但是我真的真的很喜歡2001–2003年的五月天，這兩年內五月天可以說締造了自己的歷史<而我知道>、<九號球>、<永遠的永遠>，在今日拿出來仍舊是膾炙人口的作品。"],
    ["少年維持著煩惱", "https://www.youtube.com/watch?v=gwsJfT5bYVU", "以前總覺得這些玩Hip Hop音樂、饒舌的歌手是不良少年，想起來也真是蠻搞笑的，所以一直到大學才開始聽這類型的音樂。蛋堡是我第一個愛上的歌手，他對人生細膩的觀察以及無懈可擊的歌詞，讓人百聽不厭。MV一開始口白就好聽到不行，蛋堡用才華把每個人的青春寫進歌曲裡。"],
    ["Shalala", "https://www.youtube.com/watch?v=75kbZZ9WVAI", "呱吉是我最喜歡的Youtuber，這首歌是在某次他的直播裡聽到的，當我想放空時我喜歡聽這首歌，歌詞中的 Shalalalala 像是有種魔力，可以把現實的煩惱都暫時拋去腦後，跟著 Shalalala 的旋律把思緒歸零一切回到原點。"],]

    var random_index = Math.floor(Math.random()*musics.length)
    const { userId, displayName } = context.session.user;
    console.log(userId + displayName);
    await context.replyText(`${musics[random_index][2]}：\n${musics[random_index][1]}`);
  };