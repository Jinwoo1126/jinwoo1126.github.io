---
title: "2024년 프론트엔드 트렌드 정리"
date: 2024-01-10
category: tech
tags: [frontend, react, nextjs, 트렌드]
image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
---

새해가 밝았다. 2024년 프론트엔드 생태계에서 주목해야 할 트렌드들을 정리해봤다.

## React Server Components

Next.js 13의 App Router와 함께 본격적으로 도입된 RSC는 이제 필수 지식이 되었다.

```tsx
// Server Component (기본값)
async function PostList() {
  const posts = await db.posts.findMany();
  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}
```

## Edge Computing

Vercel, Cloudflare Workers 등의 Edge Runtime이 보편화되고 있다. 사용자와 가까운 곳에서 코드를 실행해 지연 시간을 최소화할 수 있다.

## AI 통합 개발 도구

GitHub Copilot을 시작으로 AI 코딩 어시스턴트가 일상이 되었다.

## 마치며

기술은 빠르게 변하지만, 기본기는 변하지 않는다. 새로운 트렌드를 쫓되, 근본적인 웹 기술에 대한 이해도 놓치지 말자.
