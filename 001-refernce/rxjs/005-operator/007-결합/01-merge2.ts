// const { merge, interval } = rxjs;
// const { map, take } = rxjs.operators;

import { interval, map, merge, take } from "rxjs";

const intv1$ = interval(1000).pipe(
  map((_) => "INTERVAL 1"),
  take(3)
);
const intv2$ = interval(1000).pipe(
  map((_) => "INTERVAL 2"),
  take(6)
);
const intv3$ = interval(1000).pipe(
  map((_) => "INTERVAL 3"),
  take(9)
);
const intv4$ = interval(1000).pipe(
  map((_) => "INTERVAL 4"),
  take(9)
);
const intv5$ = interval(1000).pipe(
  map((_) => "INTERVAL 5"),
  take(9)
);

merge(intv1$, intv2$, intv3$, intv4$, intv5$, 3).subscribe(console.log);
