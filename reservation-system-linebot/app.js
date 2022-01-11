// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  CHANNEL_ID: '1655943690',
  CHANNEL_SECRET: '0e3f4af08645b75b0e10e0d46c1c4a4e',
  CHANNEL_ACCESS_TOKEN: '6XrwJ8BH9qnAsW+kxngzD8nTwcd/+CsbyIq67r1t59zOdron0DhljJfvwyASEJf1AdniGGjmHXODVlUTTVDE6MP1OllAoeSZjPvzqlnIVKEMgIcfAu7sJHtbmvgoAx8gZ5ltVLJuftuLdxyg9hUBGgdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(event.message.text).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒!!], heroku部屬成功!');
});