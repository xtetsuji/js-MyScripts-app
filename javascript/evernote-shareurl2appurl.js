// -*- javascript -*-
// title: Evernote共有URLからAppURL
// action: clipboard
// description: iOS版の現在のEvernoteアプリでは evernote: から始まるURLスキームのアプリURLが取れなくなっているので、一瞬共有して取得した共有URLからアプリURLを生成するためのスクリプト

// "shard" is not typo.
var path = TEXT.replace(/.*\/shard/, ""),
    p = path.split("/");

// "7654321" is random 7 length digits OK.
"evernote:///view/7654321/"+p[0]+"/"p[2]+"/"+p[2]+"/";
