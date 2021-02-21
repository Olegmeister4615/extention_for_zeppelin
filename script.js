
console.log('hi!');
var sndErr, sndSuccess;

window.onload = function() {
    //var username = document.getElementsByClassName('username')[0].innerText;
    //console.log(username);

    styles = 'div.paragraph-col{padding-top: 5px !important} ';
    /* Create style document */ 
    var css = document.createElement('style'); 
    css.type = 'text/css'; 
    
    if (css.styleSheet)  
        css.styleSheet.cssText = styles; 
    else  
        css.appendChild(document.createTextNode(styles)); 
        
    /* Append style to the tag name */ 
    document.getElementsByTagName("head")[0].appendChild(css); 
    

 
};





function beep(type) {
    if(type == 'Success') sndSuccess.play();
    if(type == 'Error') sndErr.play();

};
let pageTitle; 
let observer = new MutationObserver(mutationRecords => {
    //
    if(!sndErr || !sndSuccess){
        sndErr = document.getElementById('playerError');
        sndSuccess = document.getElementById('playerSuccess');
        console.log('sounds Finded');
    };


    ///
    //console.log(mutationRecords);
    if(mutationRecords[0].target.parentNode.className == "ng-binding"){
        console.log(mutationRecords[0].oldValue +'>>>'+ mutationRecords[0].target.data);
    }
    if(mutationRecords[0].target.data == ' DONE '){
        document.getElementsByTagName('title')[0].text = '[DONE]'+pageTitle;
        beep('Success');
        //console.log(mutationRecords);
        var idOfElem = mutationRecords[0].target.parentElement.parentElement.id;
        //console.log('id', idOfElem);
        var elem = document.getElementById(idOfElem.slice(0,idOfElem.indexOf('_control')) + '_paragraphColumn_main');
        elem.style.cssText = 'background-color: greenyellow';
        elem.addEventListener('mouseover', function(){
            elem.style.cssText = 'transition: background-color 5s ease';
        });

    }
    if(mutationRecords[0].target.data == ' ERROR '){
        document.getElementsByTagName('title')[0].text = '[Error]'+pageTitle;
        beep('Error');
        var idOfElem = mutationRecords[0].target.parentElement.parentElement.id;
        //console.log('id', idOfElem);
        var elem = document.getElementById(idOfElem.slice(0,idOfElem.indexOf('_control')) + '_paragraphColumn_main');
        elem.style.cssText = 'background-color: orangered';
        elem.addEventListener('mouseover', function(){
            elem.style.cssText = 'transition: background-color 5s ease';
        });
    }
    if(mutationRecords[0].target.data == ' PENDING '){
        if(!pageTitle){
            pageTitle = document.getElementsByTagName('title')[0].text;
        }
            
        document.getElementsByTagName('title')[0].text = '[PENDING]'+pageTitle;
        //var elem = document.getElementById(mutationRecords[0].target.parentElement.parentElement.id.slice(0,35) + '_paragraphColumn_main');
        //elem.style.cssText = 'transition: background-color 5s ease';

    }
    if(mutationRecords[0].target.data == ' RUNNING '){
        document.getElementsByTagName('title')[0].text = '[RUNNING]'+pageTitle;
    }
});

let observer1 = new MutationObserver(mutationRecords => {
    for (var i = 0; i < mutationRecords.length; i++) {
        if(mutationRecords[i].type === "childList") {
            if(mutationRecords[i].addedNodes.length){
                for (var j = 0; j < mutationRecords[i].addedNodes.length; j++){
                    if(mutationRecords[i].addedNodes[j].id){
                        if(mutationRecords[i].addedNodes[j].id.indexOf('_control')!=-1){
                            console.log('addObserve!');
                            observer.observe(document.getElementById(mutationRecords[i].addedNodes[j].id), {
                                childList: true, // наблюдать за непосредственными детьми
                                subtree: true, // и более глубокими потомками
                                //attributes: true,
                                //characterData: true,
                                characterDataOldValue: true // передавать старое значение в колбэк
                            });

                        };
                    }

                }
            }
        }
    }
});
observer1.observe(document.getElementsByTagName('body')[0], {
    childList: true, // наблюдать за непосредственными детьми
    subtree: true // и более глубокими потомками
});