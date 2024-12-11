// const { empty } = rxjs;

import { empty } from "rxjs";

empty().subscribe(console.log, console.error, () => console.log("COMPLETE"));
