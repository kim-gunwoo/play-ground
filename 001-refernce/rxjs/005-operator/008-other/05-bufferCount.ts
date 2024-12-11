// const { range } = rxjs;
// const { bufferCount } = rxjs.operators;

import { bufferCount, range } from "rxjs";

range(1, 100).pipe(bufferCount(10, 10)).subscribe(console.log);
