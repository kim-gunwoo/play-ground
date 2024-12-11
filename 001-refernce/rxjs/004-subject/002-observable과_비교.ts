import { interval, Subject } from "rxjs";

// const { Subject } = rxjs;

/**
 * subject 구독
 * 구독 시점과 관계 없이 모두 같은 구독값을 보여줌
 */

const subject = new Subject();

setTimeout((_) => {
  let x = 0;
  setInterval((_) => {
    subject.next(x++);
  }, 2000);
}, 5000);

subject.subscribe((x) => console.log("바로구독: " + x));
setTimeout((_) => {
  subject.subscribe((x) => console.log("3초 후 구독: " + x));
}, 3000);
setTimeout((_) => {
  subject.subscribe((x) => console.log("10초 후 구독: " + x));
}, 10000);
setTimeout((_) => {
  subject.subscribe((x) => console.log("14초 후 구독: " + x));
}, 14000);

/**
 * observer 구독
 * 구독 시점부터 구독된 값을 부여줌
 * 반환된 값이 다름
 */

// const { interval } = rxjs;

const obs$ = interval(1000);

obs$.subscribe((x) => console.log("바로구독: " + x));
setTimeout((_) => {
  obs$.subscribe((x) => console.log("3초 후 구독: " + x));
}, 3000);
setTimeout((_) => {
  obs$.subscribe((x) => console.log("5초 후 구독: " + x));
}, 5000);
setTimeout((_) => {
  obs$.subscribe((x) => console.log("10초 후 구독: " + x));
}, 10000);
