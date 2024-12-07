// const { interval } = rxjs;
// const { take, tap, takeLast, shareReplay } = rxjs.operators;

import { interval, shareReplay, take, tap } from "rxjs";

/**
 * shareReplay : share 된 스트림의 마지막 N개 발행물을 새 구독자에게 발행
 */

const obs$ = interval(1000).pipe(
  take(20),
  tap((x) => console.log(`side effect: ${x}`)),
  shareReplay(3)
);

obs$.subscribe((x) => console.log(`subscriber 1: ${x}`));

setTimeout((_) => {
  obs$.subscribe((x) => console.log(`subscriber 2: ${x}`));
}, 5000);
setTimeout((_) => {
  obs$.subscribe((x) => console.log(`subscriber 3: ${x}`));
}, 10000);
