// const { of } = rxjs
// const { map } = rxjs.operators

import { from, map, of } from "rxjs";

of(1, 2, 3, 4, 5)
  .pipe(map((x) => x * x))
  .subscribe(console.log);

from([
  { name: "apple", price: 1200 },
  { name: "carrot", price: 800 },
  { name: "meat", price: 5000 },
  { name: "milk", price: 2400 },
])
  .pipe(map((item) => item.price))
  .subscribe(console.log);
