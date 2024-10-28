const rxjs = require("rxjs");
const { interval, timer } = rxjs;

const obs1$ = interval(1000);
const obs2$ = timer(3000);

//obs1$.subscribe(item => console.log(`interval: ${item}`))
//obs2$.subscribe(item => console.log(`timer: ${item}`))
