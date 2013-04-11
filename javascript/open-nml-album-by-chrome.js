// -*- javascript -*-
// title: NMLアルバムをChromeで開く
// action: Open_In
// description: Google Chrome for iOS が必要です

var album_id = prompt("アルバムID");
if(album_id){
    var album_url = "googlechrome://ml.naxos.jp/album/" + album_id;
    album_url;
}
