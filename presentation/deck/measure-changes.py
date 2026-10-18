# How much of the deck's visible slide text is unchanged since the first generated version?
# Each slide is compared with its own earlier version, so moving a slide doesn't count as rewriting it.
# Speaker notes, images, diagrams and code blocks are ignored (code first shown as an image shouldn't count
# as new text once it's typed out); new slides count as changed text.
#
#   python3 presentation/deck/measure-changes.py [baseline-commit] [--exclude id,id,...]
#
# The default baseline, 70571dd, is the first commit of the deck: the generated version before any edits.
# --exclude leaves slides out of the count, e.g. ones added later as a new requirement.
import difflib
import html
import json
import re
import subprocess
import sys
from pathlib import Path

DECK = 'presentation/deck/project'
repo = Path(__file__).resolve().parents[2]
args = sys.argv[1:]
excluded = set(args.pop(args.index('--exclude') + 1).split(',')) if '--exclude' in args else set()
args = [a for a in args if a != '--exclude']
baseline = args[0] if args else '70571dd'


def read(path, commit=None):
    if commit is None:
        return (repo / path).read_text(encoding='utf-8')
    return subprocess.run(['git', '-C', str(repo), 'show', f'{commit}:{path}'],
                          capture_output=True, text=True, check=True).stdout


def visible_words(slide):
    text = re.sub(r'<aside>.*?</aside>|<svg.*?</svg>|<p style="font-family:\'Fira Code\'.*?</p>', ' ', slide, flags=re.S)
    text = html.unescape(re.sub(r'<[^>]+>', ' ', text))
    return re.findall(r"[\w’'.%$×–-]+|[^\s\w]", text)


def deck(commit=None):
    order = json.loads(read(f'{DECK}/deck.json', commit))['order']
    return order, {sid: visible_words(read(f'{DECK}/slides/{sid}.html', commit)) for sid in order}


_, then = deck(baseline)
order, now = deck()
order = [sid for sid in order if sid not in excluded]
now = {sid: now[sid] for sid in order}
total = sum(len(words) for words in now.values())
same = sum(sum(block.size for block in difflib.SequenceMatcher(None, then[sid], now[sid], autojunk=False).get_matching_blocks())
           for sid in order if sid in then)

print(f'{same / total:.0%} of the slide text is unchanged since {baseline} ({same} of {total} words)')
print(f'unchanged slides: {sum(sid in then and then[sid] == now[sid] for sid in order)} of {len(order)}')
print(f'new slides: {", ".join(sid for sid in order if sid not in then) or "none"}')
print(f'removed slides: {", ".join(sid for sid in then if sid not in now) or "none"}')
