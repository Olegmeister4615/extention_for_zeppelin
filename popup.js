let changeColor = document.getElementById('changeColor');
/*
chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {

    console.log('click');
    chrome.tabs.query({url: 'https://*'},function(tabs){
        chrome.tabs.sendMessage(
            tabs[0].id,
            { greeting: "hello" },
            function(response) { console.log(response.farewell); }  );

        chrome.tabs.group(tabs, function(tabId){

        })
    });
};
*/

document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});
