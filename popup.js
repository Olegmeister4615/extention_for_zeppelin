let changeColor = document.getElementById('changeColor');

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
