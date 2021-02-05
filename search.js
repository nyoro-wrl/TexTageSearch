let query = {};
const TEXTAGE_URL = "https://textage.cc/score/index.html?r211B000_";

// 初期処理
window.onload = function() {
    queryImport();

    if (query['q']) {
        textageSearch(query['q']);
    }
}

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

function textageSearch() {
    let text = textageTextbox.value;
    if (text == "") return;
    let asciiText = "";
    for (let i = 0; i < text.length; i++) {
		refcrd = (text.charCodeAt(i)).toString(16);
		while (refcrd.length<4) {
            refcrd = "0" + refcrd;
        }
		asciiText += refcrd;
	}
    let url = TEXTAGE_URL + asciiText;
    window.open(url);
}