module.exports = async (context, match) => {
    const photos = [
        ["實驗室會不會紅呢", "https://i.imgur.com/h8WlvSb.png"],
        ["河裡的小怪物", "https://i.imgur.com/3guqzdY.png"],
        ["選我選我選我", "https://i.imgur.com/RipC1WH.png"],
        ["萬聖節萬聖節版", "https://i.imgur.com/XyMMiIa.png"],
        ["萬聖節實驗室版", "https://i.imgur.com/8YyYR1r.png"],
        ["憂鬱的金水", "https://i.imgur.com/upiiFL1.jpg"], 
        ["好運旺旺來", "https://i.imgur.com/KJSAhGe.png"],
        ["豬年大吉大利", "https://i.imgur.com/2jLdTCH.png"]
    ]
    console.log(match[0]);
    var ph_list = ""
    for(index in photos){
        var list = parseInt(index) + 1
        ph_list = ph_list + list + ". " + photos[index][0] + "\n"
    }
    const { userId, displayName } = context.session.user;
    console.log(userId + displayName);
    if(context.event.text == "0") {
        await context.setState({
            wallpaper_mode: false,
            in_mode: false
        })
    }
    else if('123456'.indexOf(context.event.text) !== -1){
        //await context.replyText("喜歡的話記得在限時動態分享給我看哦")
        var img_index = parseInt(context.event.text) - 1
        await context.replyImage({
            originalContentUrl: photos[img_index][1],
            previewImageUrl: photos[img_index][1]
          });
        await context.setState({
            wallpaper_mode: false,
            in_mode: false
        })
    } else {
        await context.replyText(`hi! ${displayName}\n請輸入想要的桌布號碼:\n ${ph_list} 或輸入"0"結束`);
    }
};