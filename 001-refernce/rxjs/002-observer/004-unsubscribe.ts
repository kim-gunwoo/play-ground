import { interval } from "rxjs";

const obs$ = interval(1000);
const subscription = obs$.subscribe(console.log);

setTimeout((_) => subscription.unsubscribe(), 5500);
