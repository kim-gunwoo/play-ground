import { filter, interval, map, tap } from "rxjs";

const observable$ = interval(1000);

// ... observer 정의

observable$
  .pipe(
    tap(console.log),
    filter((x: number) => x % 2 === 0),
    map((x) => x * x)
  )
  //   .subscribe(observer);
  .subscribe((x) => console.log(x, "발행"));
