var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
    this.remove();
};
var s2 = document.createElement('audio');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s2.src = chrome.runtime.getURL('audio_samples/error.mp3');
s2.id="playerError";
s2.onload = function() {
    this.remove();
};
var s3 = document.createElement('audio');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s3.src = chrome.runtime.getURL('audio_samples/success.mp3');
s3.id="playerSuccess";
s3.onload = function() {
    this.remove();
};

(document.head || document.documentElement).appendChild(s); //.appendChild(s3);
(document.head || document.documentElement).appendChild(s2);
(document.head || document.documentElement).appendChild(s3);


/*
chrome.runtime.sendMessage({method: "getStatus"}, function(response) {
    console.log(response);
});

chrome.storage.sync.get('color', function(items) {
    console.log('Settings retrieved', items);
});
*/
window.onload = function() {
    setTimeout(
        () => {
            var username = document.getElementsByClassName('username')[0].innerText;
            console.log(username);
            chrome.runtime.sendMessage({theme: "username", username: username}, function(response) {
                console.log(response);
              });
        },
        4000
      );

}