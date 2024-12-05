// const { of } = rxjs;
// const { startWith } = rxjs.operators;

import { endWith, of, startWith } from "rxjs";

const obs$ = of(1, 2, 3);

obs$.pipe(startWith(0)).subscribe(console.log);
// obs$.pipe(endWith(0)).subscribe(console.log);
// obs$.pipe(startWith(-2, -1, 0)).subscribe(console.log)
