# dev.log - Jekyll + Obsidian 기술 블로그

디에디트 스타일의 미니멀 기술 블로그 템플릿입니다.  
**Obsidian**으로 글을 쓰고, **GitHub Actions**가 자동 배포합니다.

---

## ✨ 특징

- 📱 반응형 디자인 (디에디트 스타일)
- ✍️ Obsidian으로 편하게 글쓰기
- 🚀 GitHub Actions 자동 배포
- 💬 Giscus 댓글 시스템
- 📑 자동 목차(TOC) 생성
- ⏱️ 읽기 시간 표시
- 🏷️ 카테고리 & 태그 지원
- 📚 시리즈 글 연결

---

## 📁 프로젝트 구조

```
blog/
├── _config.yml           # 사이트 설정 ⚙️
├── _data/                # 데이터 파일
│   ├── navigation.yml    # 메뉴 구조
│   ├── authors.yml       # 작성자 정보
│   └── categories.yml    # 카테고리 정의
├── _drafts/              # 작성 중인 글 📝
├── _posts/               # 발행된 글 ✅
├── _layouts/             # 레이아웃 템플릿
├── _includes/            # 재사용 컴포넌트
│   └── components/       # 포스트 카드, 댓글 등
├── assets/
│   ├── css/style.css     # 스타일시트
│   ├── js/main.js        # JavaScript
│   └── images/           # 이미지
├── pages/                # 정적 페이지
├── templates/            # Obsidian 템플릿
└── .github/workflows/    # 자동 배포 설정
```

---

## 🚀 시작하기

### 1단계: GitHub 저장소 생성

1. 이 폴더를 `username.github.io` 저장소에 업로드
2. Settings → Pages → Source: **GitHub Actions** 선택

### 2단계: 기본 설정 변경

`_config.yml` 수정:

```yaml
title: 내 블로그 이름
description: 블로그 설명
url: "https://username.github.io"

author:
  name: 내 이름
  email: my@email.com
  bio: "자기소개"

social:
  github: username
  linkedin: username
```

### 3단계: Giscus 댓글 설정 (선택)

1. [giscus.app](https://giscus.app) 접속
2. 저장소 연결 및 설정
3. 발급받은 값을 `_config.yml`에 입력:

```yaml
giscus:
  repo: "username/username.github.io"
  repo_id: "발급받은_값"
  category: "Comments"
  category_id: "발급받은_값"
```

---

## ✏️ Obsidian 연동 설정

### 방법 1: Obsidian Git 플러그인 (추천)

1. **Obsidian 설치** 후 이 폴더를 Vault로 열기
2. **Community Plugins**에서 `Obsidian Git` 설치
3. 플러그인 설정:
   - Auto pull interval: `5` (분)
   - Auto push interval: `5` (분)
   - Pull on startup: ✅
   - Push on backup: ✅

4. **Templater 플러그인** 설치 (선택):
   - Template folder: `templates`
   - 단축키로 새 글 생성

### 방법 2: 수동 Git

```bash
# 글 작성 후
git add .
git commit -m "새 글: 제목"
git push
```

---

## 📝 글 작성 워크플로우

### 새 글 작성

1. `_drafts/` 폴더에 `.md` 파일 생성
2. 템플릿 사용 또는 직접 작성:

```markdown
---
title: "글 제목"
date: 2024-01-20
category: tech
tags: [태그1, 태그2]
image: "이미지 URL"
---

본문 내용...
```

3. 작성 완료 → `_posts/` 폴더로 이동
4. 파일명 형식: `YYYY-MM-DD-제목.md`

### 카테고리 종류

| 카테고리 | 용도 |
|----------|------|
| `tech` | 기술 글 |
| `projects` | 프로젝트 회고 |
| `til` | Today I Learned |
| `life` | 일상 |

### Front Matter 옵션

```yaml
---
title: "글 제목"           # 필수
date: 2024-01-20          # 필수
category: tech            # tech, projects, til, life
tags: [태그1, 태그2]       # 태그 목록
image: "URL"              # 대표 이미지
series: "시리즈명"         # 시리즈 글 연결
toc: true                 # 목차 표시 (기본: true)
comments: true            # 댓글 표시 (기본: true)
author: default           # 작성자 (_data/authors.yml)
---
```

---

## 🖼️ 이미지 관리

### 방법 1: 외부 URL (간편)

```markdown
![설명](https://images.unsplash.com/photo-xxx)
```

### 방법 2: 로컬 이미지

1. `assets/images/posts/2024-01/` 폴더에 저장
2. 마크다운에서 참조:

```markdown
![설명](/assets/images/posts/2024-01/image.jpg)
```

### Obsidian 이미지 설정 (추천)

Settings → Files & Links:
- Default location for new attachments: `In subfolder under current folder`
- Subfolder name: `images`

---

## 🎨 커스터마이징

### 폰트 변경

`assets/css/style.css` 상단:

```css
:root {
  --font-serif: 'Noto Serif KR', serif;    /* 제목 */
  --font-sans: 'Pretendard', sans-serif;   /* 본문 */
  --font-mono: 'JetBrains Mono', mono;     /* 코드 */
}
```

### 색상 변경

```css
:root {
  --color-accent: #e85a4f;      /* 강조색 */
  --color-text: #1a1a1a;        /* 본문 */
  --color-text-muted: #666;     /* 보조 */
}
```

### 메뉴 수정

`_data/navigation.yml`:

```yaml
main:
  - title: TECH
    url: /categories/tech/
    subcategories:
      - title: Frontend
        url: /tags/frontend/
```

---

## 🔧 로컬 개발 (선택)

```bash
# Ruby 설치 필요
gem install bundler jekyll

# 의존성 설치
bundle install

# 로컬 서버 (drafts 포함)
bundle exec jekyll serve --drafts

# http://localhost:4000
```

---

## 📂 기능 토글

`_config.yml`에서 기능 ON/OFF:

```yaml
features:
  comments: true        # 댓글
  toc: true             # 목차
  reading_time: true    # 읽기 시간
  related_posts: true   # 관련 글
```

---

## ❓ FAQ

### Q: 글이 안 보여요
- 파일명이 `YYYY-MM-DD-제목.md` 형식인지 확인
- 날짜가 미래가 아닌지 확인
- `_posts/` 폴더에 있는지 확인

### Q: 이미지가 안 나와요
- 경로 앞에 `/` 추가: `/assets/images/...`
- 파일명에 한글/공백 없는지 확인

### Q: 배포가 안 돼요
- Actions 탭에서 에러 확인
- `_config.yml` 문법 오류 확인

---

## 🛠️ 확장 가능한 기능들

- [ ] 검색 (Pagefind)
- [ ] 다크 모드
- [ ] 뉴스레터 구독
- [ ] 조회수 통계
- [ ] 다국어 지원

---

## 📄 라이센스

자유롭게 사용하세요!

---

**Happy Blogging! 🎉**
