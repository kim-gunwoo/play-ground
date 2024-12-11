import { Observable } from "rxjs";

const obs$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.error("test error");
  subscriber.next(4);
  subscriber.complete();
});

obs$.subscribe(
  console.log,
  (err) => console.error("발행중 오류", err),
  () => console.log("발행물 완결")
);
