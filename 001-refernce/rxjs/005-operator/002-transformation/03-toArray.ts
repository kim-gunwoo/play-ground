// const { range } = rxjs;
// const { toArray, filter } = rxjs.operators;

import { filter, range, toArray } from "rxjs";

range(1, 50)
  .pipe(
    filter((x) => x % 3 === 0),
    filter((x) => x % 2 === 1),
    toArray()
  )
  .subscribe(console.log);
