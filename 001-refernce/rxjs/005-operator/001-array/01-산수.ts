// const { of } = rxjs
// const { count, max, min, reduce } = rxjs.operators

import { count, max, min, of, reduce } from "rxjs";

const obs$ = of(4, 2, 6, 10, 8);

obs$.pipe(count()).subscribe((x) => console.log("count: " + x));

obs$.pipe(max()).subscribe((x) => console.log("max: " + x));

obs$.pipe(min()).subscribe((x) => console.log("min: " + x));

obs$
  .pipe(
    reduce((acc, x) => {
      return acc + x;
    }, 0)
  )
  .subscribe((x) => console.log("reduce: " + x));
