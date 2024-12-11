import { of, reduce } from "rxjs";

const obs$ = of(1, 2, 3, 4, 5);

obs$
  .pipe(
    reduce((acc, x) => {
      return acc + x;
    }, 0)
  )
  .subscribe((x) => console.log("reduce: " + x));
