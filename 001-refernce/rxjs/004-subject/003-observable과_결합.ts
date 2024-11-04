// const { interval, Subject } = rxjs;

import { interval, Subject } from "rxjs";

const subject = new Subject();
const obs$ = interval(1000);

// obs$.subscribe(subject);
// 아래와 같음
obs$.subscribe((x) => subject.next(x));

subject.subscribe((x) => console.log("바로구독: " + x));
setTimeout((_) => {
  subject.subscribe((x) => console.log("3초 후 구독: " + x));
}, 3000);
setTimeout((_) => {
  subject.subscribe((x) => console.log("5초 후 구독: " + x));
}, 5000);
setTimeout((_) => {
  subject.subscribe((x) => console.log("10초 후 구독: " + x));
}, 10000);
