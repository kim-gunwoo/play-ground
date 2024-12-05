// const { of } = rxjs;
// const { every } = rxjs.operators;

import { every, of } from "rxjs";

of(1, 3, 5, 7, 9, 11, 13, 15)
  .pipe(every((x) => x % 2 !== 0))
  .subscribe(console.log);
