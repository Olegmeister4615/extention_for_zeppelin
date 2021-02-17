/*
var data = {
    allowedTypes: 'those supported by structured cloning, see the list below',
    inShort: 'no DOM elements or classes/functions',
};
var block_code =  document.getElementsByClassName('icon-control-play ng-scope')

for (var i = 0; i < block_code.length; i++) {
    block_code[i].addEventListener("click", function () {
        console.log('click');
        document.dispatchEvent(new CustomEvent('myCustomEvent', { detail: data }));
    }, false);
}


document.getElementById("btn").addEventListener('click', function(){
    console.log('click');
    document.dispatchEvent(new CustomEvent('myCustomEvent', { detail: data }));
})

document.addEventListener('updateResult', function (e) {

    console.log('received heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeey');
});
*/
/*
window.addEventListener('load', function() {
    let observer = new MutationObserver(mutationRecords => {

        for (var i = 0; i < mutationRecords.length; i++) {
            if(mutationRecords[i].type === "childList") {
                for (var j = 0; j < mutationRecords.length; j++) {
                    //console.log('отредачен ',mutationRecords[i].addedNodes[j].nodeName);
                    if(mutationRecords[i].addedNodes[j]) {
                        console.log(mutationRecords[i].addedNodes[j]);
                        if(el.length) console.log(el[0]);

                        //console.log(mutationRecords[i].addedNodes[j]);
                    }
                }
                //console.log(mutationRecords[i].addedNodes);

            }
            //console.log(mutationRecords.addedNodes[i]);
        }

        console.log(mutationRecords[0].type); // console.log(изменения)
    });
*/
// наблюдать за всем, кроме атрибутов
console.log('hi!');
var sndErr = new Audio("data:audio/mpeg;base64,//tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAGAAAFtQAqKioqKioqKioqKioqKioqVVVVVVVVVVVVVVVVVVVVVVWAgICAgICAgICAgICAgICAgKqqqqqqqqqqqqqqqqqqqqrV1dXV1dXV1dXV1dXV1dXV1f////////////////////8AAAA5TEFNRTMuOTcgAaUAAAAALCYAABRAJAVBQgAAQAAABbVcep1eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UMQAAAptCVQUFAABdCJv9xDQAh8gAAv//////+7v//////8V//Lu9+iIifwhAoiIgu8Iibi4NAaB4KGJlh2AoAoDQGgoKIn/u9wQLi4uLi4uD+IAxygIAmD4PnwfBA4Jw+XP/wICFBoNBoNBoFAoFAoFAQAgBb+S793KI8gxa8uLZAl+70jZA5/jHKZfJI2/9biqMo1JfV/x2gGEOhKBJAHWAjKPt/EFBbQT0cIwIjJELgV3/7fOKE+JhqSLjmdMy//Dak8ZXFAOgDaEafD/+1LEBQALwUVsGFQAAXcorcMOUABuH9LH0fL21rPV8+NWKKGpHyv7sWOJTQn3iCoiCgmlRBFwcsJanUReV9dA+CUORFFihYQY1/9fqv/JFRaxYaxJBIz///7///7KLFwEWExI7I//xw9WtPNN3UUgNxuTEj7HYy7nISYp1/nY6kGoupepRg4VHzj6MiitHDgADUFmRw+yCIdBVK2rAwEAMBQ8KCguHCsuhlGf8SER4sOFzhw4ibXX//2FRdAOCMRBs1T//NhGYGdlYFdghQZgsv/7UsQFAAvBW534dQAZZp2vMxrQANArGAwHoVeYA4ITdgWgdvAGiqnIBLI9uxdDFU37tQxfVvS5i//nkinmT7+38hEWLY0FcWyw/H///5KPyc0fnkZPH7///+SBflzC48JDiRh4WPJLxcBwOBwORAMFCAAGECW8TkK3wkAAK1cDGBXVtjUSg1b9E3M/V7IUK61JLbsmm6CD1vXWr+nmJJKSQNygoxbsg1BBk9aJjoqSMvg+BHS6xkJA1+kMcpfCYiPArYBAKBUKAgBCBACDEDHx//tSxAcADA1rd5jWgAlaLK4DClAAzkn4SQLBSWEgGdJebFI1rV03Q1P9vWipklt/rTSTPGKFS97tbMiqidTJCdbZk7Mt09jY6s1SUkd1/W3/pl0yWZGaR1AxQ////0jIvrWanKg6YVRWyC5S6ECIA4fD4kfedjLvXmKf1bnY5yKRehupRjFer0bbxQCDUEmEHF2lFQX/gwIAYRDw4cPDixuhoz/4waYWKLuKHVNdf//9Si8ycBwVLOQ///+bMkxJSw9XJZU0UAgIBSPKr3UPCJb/+1LECYAMxYN/uFUAAXQo67Me0AB3AUK2PAVFVFcwyqm2ZasXQyptW7mUMX6m/uy6f+eSKeZ30m/8qIsWywrk5KPyfN+v/yEVydR+4/JzB+drr///iwIdCQ4eEhhIeLBpOSEdSU6eESIUAS0dgAAAAAFCG4lJ/4syEie/x8GgQu0EvmoEkCEmLE83MxYGo4uipJJNJbeVkG9Fv+Pw3ILJVH/5ODkjaufNft/pOtJkqJjr//6akXWgapou1H1f/9lGRskNyVUAQUABlvqtW1lokv/7UsQFg8hMdODcxQAAAAA0gAAABCSWS8CQBjYOQARSAqAJEKFEAWBCH4iR87f//NNNoREyEQ+cShIGSwNHgVeCv4lWGv/2Tv/9Z0SqTEFNRTMuOTeqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
var sndSuccess = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");


function beep(type) {
    if(type == 'Success') sndSuccess.play();
    if(type == 'Error') sndErr.play();

};
let pageTitle = document.getElementsByTagName('title')[0].text;
let observer = new MutationObserver(mutationRecords => {

    console.log(mutationRecords);
    if(mutationRecords[0].target.parentNode.className == "ng-binding"){
        console.log(mutationRecords[0].oldValue +'>>>'+ mutationRecords[0].target.data);
    }
    if(mutationRecords[0].target.data == ' DONE '){
        document.getElementsByTagName('title')[0].text = '[DONE]'+pageTitle;
        beep('Success');
    }
    if(mutationRecords[0].target.data == ' ERROR '){
        document.getElementsByTagName('title')[0].text = '[Error]'+pageTitle;
        beep('Error');
    }
    if(mutationRecords[0].target.data == ' PENDING '){
        document.getElementsByTagName('title')[0].text = '[PENDING]'+pageTitle;
    }
    if(mutationRecords[0].target.data == ' RUNNING '){
        document.getElementsByTagName('title')[0].text = '[RUNNING]'+pageTitle;
    }
});

/*

let observer2 = new MutationObserver(mutationRecords => {
    //console.log(mutationRecords);
    for (var i = 0; i < mutationRecords.length; i++) {
        if(mutationRecords[i].type === "childList") {
            if(mutationRecords[i].addedNodes.length){
                for (var j = 0; j < mutationRecords[i].addedNodes.length; j++){
                    if(mutationRecords[i].addedNodes[j].className = 'form-control-title'){
                            //console.log(mutationRecords[i].addedNodes[j]);

                        
                    }

                }
            }
        }
    }
});
observer2.observe(document.getElementsByTagName('body')[0], {
    childList: true, // наблюдать за непосредственными детьми
    subtree: true // и более глубокими потомками
});
*/
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

                        }
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