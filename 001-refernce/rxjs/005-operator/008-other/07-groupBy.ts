// const { range } = rxjs;
// const { groupBy, mergeMap, toArray } = rxjs.operators;

import { groupBy, mergeMap, range, toArray } from "rxjs";

range(1, 50)
  .pipe(
    groupBy((x) => x % 3),
    mergeMap((groups$) => groups$.pipe(toArray()))
  )
  .subscribe(console.log);
