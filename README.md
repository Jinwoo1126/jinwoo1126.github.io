# dev.log

A minimal, magazine-style tech blog built with Jekyll and hosted on GitHub Pages.

**Live:** [jinwoo1126.github.io](https://jinwoo1126.github.io)

---

## Features

- **Dark Mode** — System preference detection + manual toggle with localStorage persistence
- **Full-Text Search** — Client-side search powered by JSON index (title, excerpt, tags)
- **Giscus Comments** — GitHub Discussions-based commenting system
- **SEO Optimized** — `jekyll-seo-tag`, Open Graph, sitemap, RSS feed
- **Google Analytics** — GA4 integration
- **Responsive Design** — Mobile-first, optimized for all screen sizes
- **Category & Tag Filtering** — Query parameter-based filtering, no extra files needed
- **Series Support** — Link related posts together as a series
- **Auto TOC** — Table of contents auto-generated from headings
- **Reading Time** — Estimated reading time per post
- **Code Highlighting** — Rouge with GitHub Dark theme + copy button
- **Scroll Effects** — Progress bar, parallax hero, header blur on scroll

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Static Site Generator | Jekyll |
| Hosting | GitHub Pages |
| Styling | Custom CSS (Pretendard + Noto Serif KR) |
| Comments | Giscus |
| Analytics | Google Analytics (GA4) |
| SEO | jekyll-seo-tag, jekyll-sitemap, jekyll-feed |

---

## Project Structure

```
├── _config.yml            # Site configuration
├── _data/
│   ├── navigation.yml     # Menu structure
│   ├── authors.yml        # Author profiles
│   └── categories.yml     # Category definitions
├── _drafts/               # Unpublished posts
├── _posts/                # Published posts
├── _layouts/
│   ├── default.html       # Base layout
│   ├── post.html          # Post layout
│   └── page.html          # Page layout
├── _includes/
│   ├── header.html        # Header with dark mode toggle
│   ├── nav.html           # Full-screen navigation overlay
│   ├── footer.html
│   └── components/
│       ├── post-card.html # Reusable post card
│       └── giscus.html    # Comment component
├── assets/
│   ├── css/style.css      # Stylesheet (dark mode included)
│   ├── js/main.js         # Dark mode, search, scroll effects
│   ├── search.json        # Search index (auto-generated)
│   └── images/
├── pages/
│   ├── about.md
│   ├── archive.html
│   ├── categories.html
│   └── tags.html
├── 404.html               # Custom 404 page
├── robots.txt
└── Gemfile
```

---

## Writing Posts

Create a markdown file in `_posts/` with the naming convention `YYYY-MM-DD-title.md`:

```markdown
---
title: "Post Title"
date: 2024-01-20
category: tech
tags: [python, ai]
image: "https://example.com/image.jpg"
series: "Series Name"       # optional
toc: true                   # optional (default: true)
comments: true              # optional (default: true)
---

Your content here...
```

### Categories

| Category | Description |
|----------|-------------|
| `tech` | Technical articles |
| `projects` | Project retrospectives |
| `til` | Today I Learned |
| `life` | Life & misc |

Adding a new category or tag requires **no extra files** — just use it in the post front matter and it will appear automatically.

---

## Local Development

```bash
# Install dependencies
bundle install

# Run local server (with drafts)
bundle exec jekyll serve --drafts

# Open http://localhost:4000
```

---

## Customization

### Colors & Fonts

Edit CSS variables in `assets/css/style.css`:

```css
:root {
  --color-accent: #e85a4f;
  --font-serif: 'Noto Serif KR', Georgia, serif;
  --font-sans: 'Pretendard', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Feature Toggles

In `_config.yml`:

```yaml
features:
  comments: true
  toc: true
  reading_time: true
  related_posts: true
```

### Navigation

Edit `_data/navigation.yml`. Links use query parameters for filtering:

```yaml
main:
  - title: TECH
    url: /categories/?name=tech
```

---

## Remaining TODOs

- [ ] Replace placeholder profile image (`assets/images/profile.jpg`)
- [ ] Remove sample posts when ready to publish real content
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Naver Search Advisor
- [ ] Set up custom domain (optional)

---

## License

MIT
