// -*- javascript -*-
// title: NMLアルバムサマリコピー
// action: clipboard

//IS_HTML=false;

var album_id = prompt("アルバムID");
var album_url = "http://ml.naxos.jp/album/" + album_id;

setDoc(album_url);

var album_title = document.getElementById("album-intro").getElementsByTagName("h2")[0].innerText.replace(/^\s+/g,"").replace(/\s+$/,"");

var now = new Date;
var now_format = now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate();

// 結果出力
COPY("▼" + album_title + "\n" + album_url +" " + now_format + " " + "鑑賞");

document.body.innerHTML = undefined;

function get(url){
var xhr = new XMLHttpRequest();
    xhr.open("get", url, false);
    //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencode');
    xhr.send();
    return xhr.responseText;
}

function setDoc(url) {
    var res = get(url);
    // 2012/11/26
    res=res.replace(/src="http:\/\/platform\.twitter.*?"/ig,"");
    document.body.innerHTML = res;
    return; // これを書かないとSafariに飛ばされるよ
}
// NMLとは NAXOS Music Library ( http://ml.naxos.jp/ ) の略で、
// 1ヶ月2000円弱で何万枚ものクラシック音楽の楽曲CDが聴き放題
// となるサービスです
