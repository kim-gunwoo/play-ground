// const { range, interval, fromEvent } = rxjs
// const { take, filter, pluck } = rxjs.operators

import { filter, interval, range, take } from "rxjs";

range(1, 20).pipe(take(5)).subscribe(console.log);

range(1, 20)
  .pipe(
    filter((x) => x % 2 === 0),
    take(5)
  )
  .subscribe(console.log);

range(1, 20)
  .pipe(
    take(5),
    filter((x) => x % 2 === 0)
  )
  .subscribe(console.log);

interval(1000)
  .pipe(take(5))
  .subscribe(
    console.log,
    (err) => console.error(err),
    () => console.log("COMPLETE")
  );
