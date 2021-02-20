chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa000'}, function() {
        console.log('The color is green.');

    });

});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'zeppelin'},
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});

var firebaseConfig = {
    apiKey: "AIzaSyBBB-AVTvEepPalesQsX0uUR8ONEyINezg",
    authDomain: "extension-421e9.firebaseapp.com",
    projectId: "extension-421e9",
    storageBucket: "extension-421e9.appspot.com",
    messagingSenderId: "427979850042",
    appId: "1:427979850042:web:707690d261a0e2d1611003"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

