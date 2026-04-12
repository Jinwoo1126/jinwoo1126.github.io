---
layout: page
title: About
permalink: /about/
---

<section class="about-hero">
  <div class="about-image">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Profile">
  </div>

  <div class="about-content">
    <span class="about-label">About</span>
    <h1 class="about-title">안녕하세요,<br>{{ site.author.name }}입니다.</h1>
    <p class="about-intro">{{ site.author.bio }}</p>
    <div class="about-links">
      {% if site.social.github %}
      <a href="https://github.com/{{ site.social.github }}" target="_blank" class="about-link">GitHub</a>
      {% endif %}
      {% if site.social.linkedin %}
      <a href="https://linkedin.com/in/{{ site.social.linkedin }}" target="_blank" class="about-link">LinkedIn</a>
      {% endif %}
      <a href="mailto:{{ site.author.email }}" class="about-link">Contact</a>
    </div>
  </div>
</section>

<section class="about-details">
  <div class="detail-section">
    <h2 class="detail-title">Skills</h2>
    <div class="detail-content">
      <p>주로 사용하는 기술 스택입니다.</p>
      <div class="skill-list">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">PyTorch</span>
        <span class="skill-tag">TensorFlow</span>
        <span class="skill-tag">LangChain</span>
        <span class="skill-tag">HuggingFace</span>
        <span class="skill-tag">FastAPI</span>
        <span class="skill-tag">Docker</span>
        <span class="skill-tag">Git</span>
        <span class="skill-tag">SQL</span>
      </div>
    </div>
  </div>

  <div class="detail-section">
    <h2 class="detail-title">About This Blog</h2>
    <div class="detail-content">
      <p>
        이 블로그는 개발하면서 배운 것들을 기록하고 공유하기 위해 만들었습니다.
        AI/ML, 개발 도구, 사이드 프로젝트 경험 등을 다룹니다.
      </p>
      <p>
        틀린 내용이나 피드백이 있다면 언제든 연락 주세요!
      </p>
    </div>
  </div>
</section>
