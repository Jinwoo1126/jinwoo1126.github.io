/**
 * dev.log - Main JavaScript
 */

// ============================================================
// DOM Elements
// ============================================================
const header = document.getElementById('header');
const menuBtn = document.getElementById('menuBtn');
const navOverlay = document.getElementById('navOverlay');
const navClose = document.getElementById('navClose');
const progressBar = document.getElementById('progressBar');

// ============================================================
// Navigation
// ============================================================
function openNav() {
  navOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (menuBtn) menuBtn.addEventListener('click', openNav);
if (navClose) navClose.addEventListener('click', closeNav);

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navOverlay?.classList.contains('active')) {
    closeNav();
  }
});

// Category hover effect
const categoryLinks = document.querySelectorAll('.nav-categories a');
categoryLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    categoryLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ============================================================
// Scroll Effects
// ============================================================
let ticking = false;
let lastScrollY = 0;

function updateOnScroll() {
  const scrollY = lastScrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  
  // Progress Bar
  if (progressBar) {
    const scrollPercent = (scrollY / documentHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  }
  
  // Header background
  if (header) {
    header.classList.toggle('scrolled', scrollY > 100);
  }
  
  ticking = false;
}

function onScroll() {
  lastScrollY = window.scrollY;
  if (!ticking) {
    requestAnimationFrame(updateOnScroll);
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ============================================================
// Simple Search (filter posts on page)
// ============================================================
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const posts = document.querySelectorAll('.post-card');
    
    posts.forEach(post => {
      const title = post.querySelector('.post-card-title')?.textContent.toLowerCase() || '';
      const excerpt = post.querySelector('.post-card-excerpt')?.textContent.toLowerCase() || '';
      
      if (title.includes(query) || excerpt.includes(query)) {
        post.style.display = '';
      } else {
        post.style.display = query ? 'none' : '';
      }
    });
  });
}

// ============================================================
// Copy Code Button (자동 추가)
// ============================================================
document.querySelectorAll('pre code').forEach((block) => {
  const button = document.createElement('button');
  button.className = 'copy-code-btn';
  button.textContent = 'Copy';
  button.style.cssText = `
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 4px 8px;
    font-size: 12px;
    background: #374151;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s;
  `;
  
  const pre = block.parentElement;
  pre.style.position = 'relative';
  pre.appendChild(button);
  
  pre.addEventListener('mouseenter', () => button.style.opacity = '1');
  pre.addEventListener('mouseleave', () => button.style.opacity = '0');
  
  button.addEventListener('click', async () => {
    await navigator.clipboard.writeText(block.textContent);
    button.textContent = 'Copied!';
    setTimeout(() => button.textContent = 'Copy', 2000);
  });
});

// ============================================================
// External Links (새 탭에서 열기)
// ============================================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
  if (!link.href.includes(window.location.hostname)) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

// ============================================================
// Image Lazy Loading
// ============================================================
if ('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for older browsers
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}
