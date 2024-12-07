// const { interval } = rxjs;
// const { take, tap, takeLast, share } = rxjs.operators;

/**
 * share : 스트림을 여러 구독자들간 공유
 * 스트림의 부작용(tap 등)이 한 번만 발생
 */
import { interval, share, take, tap } from "rxjs";

const obs$ = interval(1000).pipe(
  take(20),
  tap((x) => console.log(`side effect: ${x}`)),
  share()
);

obs$.subscribe((x) => console.log(`subscriber 1: ${x}`));

setTimeout((_) => {
  obs$.subscribe((x) => console.log(`subscriber 2: ${x}`));
}, 5000);
setTimeout((_) => {
  obs$.subscribe((x) => console.log(`subscriber 3: ${x}`));
}, 10000);
