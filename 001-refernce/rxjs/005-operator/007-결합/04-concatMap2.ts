// const { of } = rxjs;
// const { ajax } = rxjs.ajax;
// const { concatMap, pluck } = rxjs.operators;

import { concatMap, of, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";

of(3, 15, 4, 9, 1, 7)
  .pipe(
    concatMap((keyword) =>
      ajax(`http://127.0.0.1:3000/people/${keyword}`).pipe(
        pluck("response", "first_name")
      )
    )
  )
  .subscribe(console.log);
