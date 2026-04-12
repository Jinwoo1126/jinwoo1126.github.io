source "https://rubygems.org"

# Jekyll
gem "jekyll", "~> 4.3"

# Plugins
gem "jekyll-seo-tag"
gem "jekyll-sitemap"
gem "jekyll-feed"

# GitHub Pages 호환
group :jekyll_plugins do
  gem "github-pages"
end

# Windows & JRuby
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
