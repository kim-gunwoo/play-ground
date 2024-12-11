// const { from } = rxjs;
// const { distinctUntilChanged } = rxjs.operators;

import { distinctUntilChanged, from } from "rxjs";

const students = [
  { name: "홍길동", sex: "male" },
  { name: "전우치", sex: "male" },
  { name: "아라치", sex: "female" },
  { name: "성춘향", sex: "female" },
  { name: "임꺽정", sex: "male" },
];

from(students)
  .pipe(distinctUntilChanged((a, b) => a.sex === b.sex))
  .subscribe(console.log);
