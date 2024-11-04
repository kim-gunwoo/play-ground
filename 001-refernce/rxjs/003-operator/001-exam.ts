import { filter, map, range } from "rxjs";

const observable$ = range(1, 10);

const observer = {
  next: (x: number) => console.log(x + " 발행"),
  error: (err: Error) => console.error("발행중 오류", err),
  complete: () => console.log("발행물 완결"),
};

observable$.pipe(filter((x) => x % 2 === 0)).subscribe(observer);

observable$
  .pipe(
    filter((x) => x % 2 === 0),
    map((x) => x * x)
  )
  .subscribe(observer);
