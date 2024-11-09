// const { from } = rxjs;
// const { first, last, elementAt, filter, distinct } = rxjs.operators;

import { distinct, elementAt, filter, first, from, last } from "rxjs";

const obs$ = from([
  9, 3, 10, 5, 1, 10, 9, 9, 1, 4, 1, 8, 6, 2, 7, 2, 5, 5, 10, 2,
]);

obs$.pipe(first()).subscribe((x) => console.log("first: " + x));

obs$.pipe(last()).subscribe((x) => console.log("last: " + x));

obs$.pipe(elementAt(5)).subscribe((x) => console.log("elementAt: " + x));

obs$.pipe(distinct()).subscribe((x) => console.log("distinct: " + x));

obs$
  .pipe(filter((x) => x % 2 === 1))
  .subscribe((x) => console.log("filter: " + x));
