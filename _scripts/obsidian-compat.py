#!/usr/bin/env python3
"""
Obsidian → Jekyll 호환 변환 스크립트
- ==highlight== → <mark>highlight</mark>
- > [!type] callouts → <div class="callout"> HTML
"""
import re
import glob
import sys

def convert_highlights(content):
    """==text== → <mark>text</mark>"""
    return re.sub(r'==(.*?)==', r'<mark>\1</mark>', content)

def convert_callouts(content):
    """Obsidian callout → HTML div"""
    lines = content.split('\n')
    result = []
    i = 0

    while i < len(lines):
        # Match callout start: > [!type] optional title
        match = re.match(r'^>\s*\[!(\w+)\]\s*(.*)', lines[i])
        if match:
            callout_type = match.group(1).lower()
            custom_title = match.group(2).strip()

            # Default titles
            titles = {
                'note': 'Note', 'abstract': 'Abstract', 'info': 'Info',
                'todo': 'Todo', 'tip': 'Tip', 'hint': 'Hint',
                'important': 'Important', 'success': 'Success',
                'check': 'Check', 'done': 'Done',
                'question': 'Question', 'help': 'Help', 'faq': 'FAQ',
                'warning': 'Warning', 'caution': 'Caution', 'attention': 'Attention',
                'danger': 'Danger', 'error': 'Error', 'bug': 'Bug',
                'failure': 'Failure', 'fail': 'Fail', 'missing': 'Missing',
                'example': 'Example', 'quote': 'Quote', 'cite': 'Cite',
            }
            title = custom_title if custom_title else titles.get(callout_type, callout_type.capitalize())

            # Color mapping
            if callout_type in ('note', 'abstract', 'info', 'todo'):
                color_class = 'blue'
            elif callout_type in ('tip', 'hint', 'important', 'success', 'check', 'done'):
                color_class = 'green'
            elif callout_type in ('warning', 'caution', 'attention', 'question', 'help', 'faq'):
                color_class = 'yellow'
            elif callout_type in ('danger', 'error', 'bug', 'failure', 'fail', 'missing'):
                color_class = 'red'
            else:
                color_class = 'gray'

            # Collect callout body
            body_lines = []
            i += 1
            while i < len(lines) and re.match(r'^>\s?(.*)', lines[i]):
                m = re.match(r'^>\s?(.*)', lines[i])
                body_lines.append(m.group(1))
                i += 1

            body = '\n'.join(body_lines).strip()
            body = convert_highlights(body)

            result.append(f'<div class="callout callout-{color_class}">')
            result.append(f'<div class="callout-title">{title}</div>')
            result.append(f'<div class="callout-content">\n\n{body}\n\n</div>')
            result.append('</div>')
            result.append('')
        else:
            result.append(lines[i])
            i += 1

    return '\n'.join(result)

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split front matter and body
    parts = content.split('---', 2)
    if len(parts) >= 3:
        front_matter = parts[0] + '---' + parts[1] + '---'
        body = parts[2]
    else:
        front_matter = ''
        body = content

    body = convert_highlights(body)
    body = convert_callouts(body)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(front_matter + body)

if __name__ == '__main__':
    files = glob.glob('_posts/**/*.md', recursive=True) + \
            glob.glob('_posts/*.md') + \
            glob.glob('_drafts/**/*.md', recursive=True) + \
            glob.glob('_drafts/*.md')

    files = list(set(files))
    for f in files:
        process_file(f)
        print(f'Processed: {f}')
