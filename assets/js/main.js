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
// Dark Mode
// ============================================================
const themeToggle = document.getElementById('themeToggle');

function getTheme() {
  return localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// ============================================================
// Navigation
// ============================================================
function openNav() {
  navOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Focus search input
  var searchInput = document.getElementById('searchInput');
  if (searchInput) setTimeout(function() { searchInput.focus(); }, 300);
}

function closeNav() {
  navOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (menuBtn) menuBtn.addEventListener('click', openNav);
if (navClose) navClose.addEventListener('click', closeNav);

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && navOverlay && navOverlay.classList.contains('active')) {
    closeNav();
  }
});

// Category hover effect
var categoryLinks = document.querySelectorAll('.nav-categories a');
categoryLinks.forEach(function(link) {
  link.addEventListener('mouseenter', function() {
    categoryLinks.forEach(function(l) { l.classList.remove('active'); });
    link.classList.add('active');
  });
});

// ============================================================
// Scroll Effects
// ============================================================
var ticking = false;
var lastScrollY = 0;

function updateOnScroll() {
  var scrollY = lastScrollY;
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight - windowHeight;

  // Progress Bar
  if (progressBar && documentHeight > 0) {
    var scrollPercent = (scrollY / documentHeight) * 100;
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
// Search (전체 포스트 검색)
// ============================================================
(function() {
  var searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  var searchResults = document.createElement('div');
  searchResults.className = 'search-results';
  searchInput.parentElement.appendChild(searchResults);

  var posts = null;
  var debounceTimer = null;

  function loadPosts(callback) {
    if (posts) return callback(posts);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/assets/search.json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        posts = JSON.parse(xhr.responseText);
        callback(posts);
      }
    };
    xhr.send();
  }

  function renderResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-result">검색 결과가 없습니다.</div>';
      return;
    }
    var html = results.slice(0, 8).map(function(post) {
      return '<a href="' + post.url + '" class="search-result-item">' +
        '<span class="search-result-category">' + post.category + '</span>' +
        '<span class="search-result-title">' + post.title + '</span>' +
        '<span class="search-result-date">' + post.date + '</span>' +
        '</a>';
    }).join('');
    searchResults.innerHTML = html;
  }

  searchInput.addEventListener('input', function(e) {
    var query = e.target.value.trim().toLowerCase();
    clearTimeout(debounceTimer);

    if (!query) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
      return;
    }

    debounceTimer = setTimeout(function() {
      loadPosts(function(allPosts) {
        var results = allPosts.filter(function(post) {
          return post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            (post.tags && post.tags.some(function(t) { return t.toLowerCase().includes(query); }));
        });
        searchResults.style.display = 'block';
        renderResults(results);
      });
    }, 200);
  });

  // Close results when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });
})();

// ============================================================
// Copy Code Button
// ============================================================
document.querySelectorAll('pre code').forEach(function(block) {
  var button = document.createElement('button');
  button.className = 'copy-code-btn';
  button.textContent = 'Copy';

  var pre = block.parentElement;
  pre.style.position = 'relative';
  pre.appendChild(button);

  pre.addEventListener('mouseenter', function() { button.style.opacity = '1'; });
  pre.addEventListener('mouseleave', function() { button.style.opacity = '0'; });

  button.addEventListener('click', function() {
    navigator.clipboard.writeText(block.textContent).then(function() {
      button.textContent = 'Copied!';
      setTimeout(function() { button.textContent = 'Copy'; }, 2000);
    });
  });
});

// ============================================================
// External Links (새 탭에서 열기)
// ============================================================
document.querySelectorAll('a[href^="http"]').forEach(function(link) {
  if (!link.href.includes(window.location.hostname)) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});
