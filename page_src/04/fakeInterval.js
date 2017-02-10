var currentTimers = [];
//
function setTimer(handler, timeMills) {
    let id = Symbol();
    currentTimers.push(id);
    startTimer(handler, timeMills, id);
    return id;
}

function startTimer(handler, timeMills, id) {
    setTimeout(function() {
        handler();
        if (currentTimers.indexOf(id) == -1) {
            console.log('clear timer');
            return;
        }
        startTimer(handler, timeMills, id);    
    }, timeMills);
}

function clearTimer(id) {
    let index = currentTimers.indexOf(id);
    currentTimers.splice(index, 1);
}

// test
var index = setTimer(function() {
    console.log('timer is working');
}, 1000);

setTimeout(function() {
    clearTimer(index);
}, 5000);