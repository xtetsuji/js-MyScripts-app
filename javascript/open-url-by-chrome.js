// -*- javascript -*-
// title: Chromeで開く
// action: Open_In

if(TEXT.match(/^https?:/)){
    var url = TEXT.replace(/ .*/,"");
    "googlechrome"+url.substring(4, url.length);        
} else {
    void(0);
}
