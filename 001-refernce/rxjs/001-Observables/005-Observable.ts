import { Observable } from "rxjs";

// Observable을 통해 커스텀하게 만들수 있음
const obs$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  // 값을 다 발행한 뒤에는 compelte를 실행하여 메모리 해제
  subscriber.complete();
});

obs$.subscribe((item) => console.log(item));
