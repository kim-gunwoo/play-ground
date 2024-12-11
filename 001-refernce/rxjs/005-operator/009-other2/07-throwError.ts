// const { throwError } = rxjs;

import { throwError } from "rxjs";

throwError("ERROR").subscribe(console.log, console.error, () =>
  console.log("COMPLETE")
);
