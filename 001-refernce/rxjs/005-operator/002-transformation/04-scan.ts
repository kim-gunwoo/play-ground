// const { of } = rxjs;
// const { reduce, scan } = rxjs.operators;

import { of, scan } from "rxjs";

const obs$ = of(1, 2, 3, 4, 5);

obs$
  .pipe(
    scan((acc, x) => {
      return acc + x;
    }, 0)
  )
  .subscribe((x) => console.log("scan: " + x));
