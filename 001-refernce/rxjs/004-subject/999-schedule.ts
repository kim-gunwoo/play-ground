// const { of, asyncScheduler } = rxjs;
// const { subscribeOn, observeOn, tap } = rxjs.operators;

import { asyncScheduler, observeOn, of, subscribeOn, tap } from "rxjs";

const tapper = (x: string | number) => console.log(`${x} IN`);
const observer = (x: string | number) => console.log(`${x} OUT`);

of(1, 2, 3).pipe(tap(tapper), subscribeOn(asyncScheduler)).subscribe(observer);

of(4, 5, 6).pipe(tap(tapper)).subscribe(observer);

of("A", "B", "C")
  .pipe(tap(tapper), observeOn(asyncScheduler))
  .subscribe(observer);

of("D", "E", "F").pipe(tap(tapper)).subscribe(observer);
