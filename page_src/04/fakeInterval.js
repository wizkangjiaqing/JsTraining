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
var index1 = setTimer(function() {
    console.log('timer is working1');
}, 1000);

var index2 = setTimer(function() {
    console.log('timer is working2');
}, 1000);

setTimeout(function() {
    clearTimer(index1);
}, 5000);

setTimeout(function() {
    clearTimer(index2);
}, 10000);