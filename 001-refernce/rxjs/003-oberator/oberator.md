# Operator

## Creation operators:

Observable을 생성

of, from, range, fronEvent, timeout, interval...
rxjs에서 로드

## Pipable operators:

Observable의 데이터를 pure function으로 가공

(현존하는 데이터를 수정하지 않음)
rxjs.operators에서 로드
pipe 함수에 하나 이상 넣어 연결
[🔗 참고영상 - 함수형 프로그래밍](https://www.youtube.com/watch?v=jVG5jvOzu9Y)

```js
// 001-exam.ts
const { range } = rxjs;

const { filter } = rxjs.operators;
const observable$ = range(1, 10);

const observer = {
  next: (x) => console.log(x + " 발행"),
  error: (err) => console.error("발행중 오류", err),
  complete: () => console.log("발행물 완결"),
};

observable$.pipe(filter((x) => x % 2 === 0)).subscribe(observer);

// map 추가해보기
map((x) => x * x);
```

```js
// 002-exam.ts
const { interval } = rxjs;

const { tap, filter, map } = rxjs.operators;
const observable$ = interval(1000);

// ... observer 정의

observable$
  .pipe(
    tap(console.log),
    filter((x) => x % 2 === 0),
    map((x) => x * x)
  )
  .subscribe(observer);
```

```js
// 003-exam.html
const { fromEvent } = rxjs;

const { map } = rxjs.operators;
const observable$ = fromEvent(document, "click");

// ... observer 정의

observable$.pipe(map((e) => e.x + " " + e.y)).subscribe(observer);
```

[🔗 바로가기](https://rxjs.dev/guide/operators)
