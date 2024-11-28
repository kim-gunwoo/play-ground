// const { of } = rxjs;
// const { ajax } = rxjs.ajax;
// const { mergeMap, pluck } = rxjs.operators;

import { mergeMap, of, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";

of(3, 15, 4, 9, 1, 7)
  .pipe(
    mergeMap((keyword) =>
      ajax(`http://127.0.0.1:3000/people/${keyword}`).pipe(
        pluck("response", "first_name")
      )
    )
  )
  .subscribe(console.log);

of(3, 15, 4, 9, 1, 7)
  .pipe(
    mergeMap(
      (keyword) =>
        ajax(`http://127.0.0.1:3000/people/${keyword}`).pipe(
          pluck("response", "first_name")
        ),
      3
    ) // 한 번에 3개 스트림만
  )
  .subscribe(console.log);
