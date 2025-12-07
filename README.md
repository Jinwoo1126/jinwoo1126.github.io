# dev.log - 기술 블로그 템플릿

디에디트 스타일의 미니멀 기술 블로그 템플릿입니다.

## 📁 파일 구조

```
github-blog/
├── index.html          # 메인 페이지 (글 목록)
├── about.html          # 자기소개 페이지
├── posts/
│   └── sample-post.html    # 글 상세 페이지 템플릿
└── README.md           # 이 파일
```

## 🚀 GitHub Pages 배포 방법

### 1단계: GitHub 저장소 생성

1. GitHub에서 새 저장소(Repository) 생성
2. 저장소 이름: `username.github.io` (username은 본인의 GitHub 사용자명)
   - 또는 다른 이름으로 생성 가능 (예: `my-blog`)

### 2단계: 파일 업로드

**방법 A: 웹에서 직접 업로드**
1. 저장소 페이지에서 "Add file" → "Upload files" 클릭
2. 모든 파일을 드래그 앤 드롭
3. "Commit changes" 클릭

**방법 B: Git 명령어 사용**
```bash
git clone https://github.com/username/username.github.io.git
cd username.github.io
# 파일들을 이 폴더에 복사
git add .
git commit -m "Initial commit"
git push origin main
```

### 3단계: GitHub Pages 활성화

1. 저장소 → Settings → Pages
2. Source: "Deploy from a branch" 선택
3. Branch: "main" 선택, 폴더: "/ (root)" 선택
4. Save 클릭

### 4단계: 확인

- 몇 분 후 `https://username.github.io` 에서 확인 가능
- 다른 저장소명을 사용한 경우: `https://username.github.io/repository-name`

## ✏️ 커스터마이징

### 기본 정보 수정

모든 HTML 파일에서 다음 내용을 수정하세요:

| 항목 | 찾기 | 바꾸기 |
|------|------|--------|
| 블로그 이름 | `dev.log` | 원하는 이름 |
| 이름 | `Your Name` | 본인 이름 |
| GitHub | `yourusername` | GitHub 사용자명 |
| 이메일 | `your@email.com` | 본인 이메일 |

### 프로필 이미지 변경

1. 이미지 파일을 저장소에 업로드 (예: `images/profile.jpg`)
2. HTML에서 이미지 URL 수정:
```html
<!-- 변경 전 -->
<img src="https://images.unsplash.com/..." alt="Profile">

<!-- 변경 후 -->
<img src="/images/profile.jpg" alt="Profile">
```

### 새 글 작성

1. `posts/sample-post.html` 파일을 복사
2. 파일명 변경 (예: `posts/my-new-post.html`)
3. 내용 수정:
   - `<title>` 태그
   - 카테고리, 제목, 날짜
   - 본문 내용
   - 대표 이미지
4. `index.html`에 새 글 카드 추가

### 색상 변경

CSS의 `:root` 변수를 수정하세요:

```css
:root {
  --color-accent: #e85a4f;     /* 강조색 (프로그레스 바 등) */
  --color-text: #1a1a1a;       /* 본문 텍스트 */
  --color-text-muted: #666666; /* 보조 텍스트 */
}
```

## 🎨 디자인 특징

- ✅ 좌우 분할 히어로 레이아웃
- ✅ 스크롤 시 부드러운 페이드아웃 효과
- ✅ 읽기 진행률 프로그레스 바
- ✅ 반응형 디자인 (모바일 지원)
- ✅ 슬라이드 네비게이션 메뉴
- ✅ GPU 가속 애니메이션

## 📱 지원 브라우저

- Chrome (권장)
- Firefox
- Safari
- Edge

## 📄 라이센스

자유롭게 사용하세요!

---

문의사항이 있으면 이슈를 남겨주세요.
