// const { from } = rxjs;
// const { pluck } = rxjs.operators;

import { from, pluck } from "rxjs";

const obs$ = from([
  { name: "apple", price: 1200, info: { category: "fruit" } },
  { name: "carrot", price: 800, info: { category: "vegetable" } },
  { name: "pork", price: 5000, info: { category: "meet" } },
  { name: "milk", price: 2400, info: { category: "drink" } },
]);

obs$.pipe(pluck("price")).subscribe(console.log);

obs$.pipe(pluck("info"), pluck("category")).subscribe(console.log);

obs$.pipe(pluck("info", "category")).subscribe(console.log);

/**
 * pluck -> map으로 치환 가능하며 v8 버전에서 사라질(?) 예정
 */
