// -*- javascript -*-
// title: URLにtitleを追加
// action: clipboard

function get(url){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
    xhr.send();
    return xhrl.responseText;
}

if (TEXT.match(/^https?:\/\/[^ ]+$/){
    var res = get(TEXT);
    res = res.replace(/<body .*/i, "");
    res = res + "<body></body></html>";
    res = res.replace(/<script.*?<\/script>/ig, "");
    document.body.innerHTML = res;
    COPY(
        TEXT+" "+document.getElementsByTagName("title")[0].innerText,
        "URLにタイトルをつけました");
}

// FIXIT: iframe run safari at specific page.
