// -*- javascript -*-
// title: TweetbotでTweet URLを開く
// action: Open_In
// description: Tweetbot for iOS が必要です

var m = TEXT.match(/\/status\/([0-9]+)$/);
'tweetbot:///status/'+m[1];
