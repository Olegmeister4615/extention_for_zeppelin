var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
    this.remove();
};
var j = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
j.src = chrome.runtime.getURL('http://code.jquery.com/jquery-latest.min.js');
j.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

document.addEventListener('myCustomEvent', function (e) {
    var data = e.detail;
    console.log('received', data);
});
document.addEventListener('myCustomEvent', function (e) {
    var data = e.detail;
    console.log('received', data);
});



