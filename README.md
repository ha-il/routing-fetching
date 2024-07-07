# 이번 챌린지 중점 사항

## 1. try catch 문의 반복을 없애기 위해 함수형 프로그래밍을 이용해봤습니다.

최근에 "쏙쏙 들어오는 함수형 코딩"이라는 책을 읽고 있는데, `try/catch`문까지 중복으로 생각하여 함수형으로 이를 해결하는 것이 꽤 신선했습니다.

이번 과제에서 캐릭터의 전체 리스트와 개별 디테일을 가져올 때, 동일하게 로딩과 에러를 처리했는데, 동일한 과정이니까 이 과정을 커스텀훅으로 만들어서 중복을 없애봤습니다.

```tsx
// 호출하지 않은 함수 f를 인자로 받아서 handleErrorAsync 안에서 호출합니다.
// 아래와 같이 함수를 넘겨주면, 매번 try/catch문을 사용할 필요가 없고,
// 로딩과 에러를 표시하는 로직 또한 매번 작성할 필요가 없습니다.

// src/hooks/useLoadingAndError.tsx
import { useEffect, useState } from "react";

export default function useLoadingAndError(f: () => Promise<void>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // 넘겨준 함수 f는 try문 안에서 호출해줍니다.
        await f();
      } catch (error: unknown) {
        // catch문 안에서 에러를 처리합니다.
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        // finally 문 안에서 로딩을 처리합니다.
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { loading, error };
}
```
