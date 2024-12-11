// const { range, interval, fromEvent } = rxjs
// const { skipWhile, filter, pluck } = rxjs.operators

import { interval, range, skipWhile } from "rxjs";

range(1, 20)
  .pipe(skipWhile((x) => x <= 10))
  .subscribe(console.log);

interval(1000)
  .pipe(skipWhile((x) => x < 5))
  .subscribe(
    console.log,
    (err) => console.error(err),
    () => console.log("COMPLETE")
  );
