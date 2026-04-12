---
title: "TIL: TypeScript 제네릭 완벽 이해"
date: 2024-01-02
category: til
tags: [typescript, 제네릭]
image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80"
toc: false
---

## 배운 것

TypeScript 제네릭은 타입을 함수의 매개변수처럼 사용하는 것이다.

```typescript
// 제네릭 없이
function getFirstNumber(arr: number[]): number {
  return arr[0];
}

// 제네릭 사용
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst<number>([1, 2, 3]); // 1
getFirst<string>(['a', 'b']); // 'a'
```

## 제약 조건

특정 타입만 허용하고 싶을 때 `extends` 키워드를 사용한다.

```typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}
```

## 참고

- [TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
