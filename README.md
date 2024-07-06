# 이번 챌린지 중점 사항

## 1. try catch 문의 반복을 없애기 위해 함수형 프로그래밍을 이용해봤습니다.

최근에 "쏙쏙 들어오는 함수형 코딩"이라는 책을 읽고 있는데, `try/catch`문까지 중복으로 생각하여 함수형으로 이를 해결하는 것이 꽤 신선했습니다. 이번 챌린지에 한 번 적용해봤습니다.

```ts
// 호출하지 않은 함수 f를 인자로 받아서 handleErrorAsync 안에서 호출한다.
// 아래와 같이 함수를 넘겨주면, 매번 try/catch문을 사용할 필요가 없다.
export async function handleErrorAsync(f: () => Promise<void>) {
  try {
    await f();
  } catch (err) {
    console.error(err);
  }
}
```
