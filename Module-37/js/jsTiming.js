console.log('First');
console.log('Second');

// for setTimeout
const timeOut = setTimeout(() => {
    console.log('Three');
}, 5000);
clearTimeout(timeOut);      // to stop the execution of setTimeout function.

// for setInterval
const interval = setInterval(() => {
    console.log('Three');
}, 1000);
clearInterval(interval);     // to stop the execution of setInterval function.

console.log('Fourth');
console.log('Fifth');