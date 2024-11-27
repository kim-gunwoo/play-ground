// const { concat, interval } = rxjs;
// const { map, take } = rxjs.operators;

import { concat, interval, map, take } from "rxjs";

const intv1$ = interval(1000).pipe(
  map((_) => "INTERVAL 1"),
  take(3)
);
const intv2$ = interval(1000).pipe(
  map((_) => "INTERVAL 2"),
  take(3)
);
const intv3$ = interval(1000).pipe(
  map((_) => "INTERVAL 3"),
  take(3)
);

concat(intv1$, intv2$, intv3$).subscribe(console.log);
