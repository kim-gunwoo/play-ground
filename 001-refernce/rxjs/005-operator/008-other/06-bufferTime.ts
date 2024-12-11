// const { interval } = rxjs;
// const { bufferTime } = rxjs.operators;

import { bufferTime, interval } from "rxjs";

interval(200).pipe(bufferTime(2000)).subscribe(console.log);
