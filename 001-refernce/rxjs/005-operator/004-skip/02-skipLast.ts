// const { range, interval, fromEvent } = rxjs;
// const { skipLast, pluck } = rxjs.operators;

import { interval, range, skipLast } from "rxjs";

range(1, 20).pipe(skipLast(5)).subscribe(console.log);

interval(1000)
  .pipe(skipLast(5))
  .subscribe(
    console.log,
    (err) => console.error(err),
    () => console.log("COMPLETE")
  );
