// const { from, interval, fromEvent, zip } = rxjs;
// const { pluck } = rxjs.operators;

import { from, fromEvent, interval, pluck, zip } from "rxjs";

const obs1$ = from([1, 2, 3, 4, 5]);
// const obs1$ = from([1, 2, 3, 4, 5, 6, 7]);
const obs2$ = from(["a", "b", "c", "d", "e"]);
const obs3$ = from([true, false, "F", [6, 7, 8], { name: "zip" }]);

zip(obs1$, obs2$).subscribe(console.log);
zip(obs1$, obs2$, obs3$).subscribe(console.log);

const obs4$ = interval(1000);
const obs5$ = fromEvent(document, "click").pipe(pluck("x"));

zip(obs4$, obs5$).subscribe(console.log);
