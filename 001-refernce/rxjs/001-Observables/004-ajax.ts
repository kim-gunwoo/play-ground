// node에서 실행시키기 위해선 추가 설치가 필요

import { ajax } from "rxjs/ajax";

// const { ajax } = rxjs.ajax;

const obs$ = ajax(`http://127.0.0.1:3000/people/1`);
obs$.subscribe((result) => console.log(result.response));
