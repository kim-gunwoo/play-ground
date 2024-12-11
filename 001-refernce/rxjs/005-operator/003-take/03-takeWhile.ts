// const { range, interval, fromEvent } = rxjs
// const { takeWhile, takeLast, filter, pluck } = rxjs.operators

import { interval, range, takeWhile } from "rxjs";

range(1, 20)
  .pipe(takeWhile((x) => x <= 10))
  .subscribe(console.log);

interval(1000)
  .pipe(takeWhile((x) => x < 5))
  .subscribe(
    console.log,
    (err) => console.error(err),
    () => console.log("COMPLETE")
  );
