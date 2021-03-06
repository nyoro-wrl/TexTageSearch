let query = {};

// 初期処理
window.addEventListener('DOMContentLoaded', function() {
    queryImport();
    if (query['q']) {
        textageSearch(query['q']);
    } else {
        location.replace("https://textage.cc/score/index.html?a011B000");
    }
})

function queryImport() {
    let url = location.search;
    if (url) {
        url = url.substring(1);
        let params =  url.split('&');
        for (let i = 0; i < params.length; i++) {
            let element = params[i].split('=');
            let name = decodeURIComponent(element[0]);
            let value = decodeURIComponent(element[1]);
            query[name] = value;
        }
    }
}

function textageSearch(text) {
    if (text == "") return;
    let asciiText = "";
    for (let i = 0; i < text.length; i++) {
		refcrd = (text.charCodeAt(i)).toString(16);
		while (refcrd.length<4) {
            refcrd = "0" + refcrd;
        }
        if (refcrd == "002b") {
            refcrd = "0020";
        }
		asciiText += refcrd;
	}
    let url = "https://textage.cc/score/index.html?r211B000_" + asciiText;
    location.replace(url);
}