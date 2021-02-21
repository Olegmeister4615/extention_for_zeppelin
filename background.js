/*
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa000'}, function() {
        console.log('The color is green.');

    });

});
*/
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'zeppelin'},
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});
/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStatus")
      sendResponse({status: localStorage['status']});
    else
      sendResponse({}); // snub them.
      console.log('wtf');
});
*/
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.theme == "username"){
        sendResponse({responce:"Done!"});
        //console.log(request.username);
        user = request.username;
        chrome.storage.sync.set({userName: request.username}, function() {
            console.log('I wrote username!');
        });
        chrome.storage.sync.get('lastSendedUserName', function(items) {
            //console.log(items.lastSendedUserName);
            today = new Date();
            today = formatDate(today);
            if(!items.lastSendedUserName||items.lastSendedUserName != today) {
                console.log('lastSendedUserName empty');
                chrome.storage.sync.set({lastSendedUserName: today}, function() {
                    console.log('I wrote today!');
                    userCollection.doc(user).get().then(function(doc) {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            userCollection.doc(user).update({
                                dates: firebase.firestore.FieldValue.arrayUnion(today)
                            });
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                            userCollection.doc(user).set({
                                name: user, 
                                dates: [today] });
                        }
                    });

                });
                return;
            }
            if(items.lastSendedUserName == today)
                console.log('today already sended username');



        });

    }
    else
      sendResponse({}); // snub them.
      //console.log('wtf');
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
var userCollection = db.collection("users");






function formatDate(date) {
    if(!date) return;
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
      var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
      var yy = date.getFullYear();
    return dd + '.' + mm + '.' + yy;
}
