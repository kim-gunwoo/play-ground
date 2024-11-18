// const { range, interval, fromEvent } = rxjs;
// const { skip, filter, pluck } = rxjs.operators;

import { interval, range, skip } from "rxjs";

range(1, 20).pipe(skip(5)).subscribe(console.log);

interval(1000)
  .pipe(skip(5))
  .subscribe(
    console.log,
    (err) => console.error(err),
    () => console.log("COMPLETE")
  );
