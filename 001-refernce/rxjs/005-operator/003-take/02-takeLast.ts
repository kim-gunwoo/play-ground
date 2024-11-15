// const { range, interval, fromEvent } = rxjs;
// const { takeLast, take, pluck } = rxjs.operators;

import { interval, range, take, takeLast } from "rxjs";

range(1, 20).pipe(takeLast(5)).subscribe(console.log);

interval(1000)
  .pipe(takeLast(5))
  .subscribe(
    console.log,
    (err) => console.error(err),
    () => console.log("COMPLETE")
  );

interval(1000)
  .pipe(take(10), takeLast(5))
  .subscribe(
    console.log,
    (err) => console.error(err),
    () => console.log("COMPLETE")
  );

// interval(1000)
//   .pipe(take(10), takeLast(5))
//   .subscribe({
//     next: () => console.log,
//     error: (err) => console.error(err),
//     complete: () => console.log("COMPLETE"),
//   });
