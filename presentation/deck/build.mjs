// Builds index.html: the whole deck as one self-contained page that works offline.
// Fonts and images are inlined, so the single file can be copied anywhere.
//
//   node presentation/deck/build.mjs
//
// Keys: → / PageDown / Space next, ← / PageUp previous, Home / End, f fullscreen.
// Print to PDF from the browser for one slide per page.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const read = (path) => readFileSync(join(dir, path));
const dataUri = (path, type) => `data:${type};base64,${read(path).toString('base64')}`;

// Image ids in the online deck → the same images in assets/.
const assets = {
  '/_blob/dd279c92a42820343cee83ea35bf0e12': dataUri('assets/knowit-logo-white.svg', 'image/svg+xml'),
  '/_blob/76d491d66b5a404514c91fb506e449e8': dataUri('assets/knowit-logo-black.svg', 'image/svg+xml'),
  '/_blob/c64cbd12e8a44e5e2dbd5e82cc2a5f8a': dataUri('assets/gold-plating-cartoon.png', 'image/png'),
  '/_blob/b72f3c219cd3d2daca882ea248c70b3e': dataUri('assets/hello-world-enterprise.png', 'image/png'),
  '/_blob/ec28b15013170bd7a4399b89431e6a09': dataUri('assets/myth-gorman.png', 'image/png'),
  '/_blob/a861974baafd8ae5506556f931a59d69': dataUri('assets/myth-laforgia.png', 'image/png'),
  '/_blob/9a5ee49bedd490f722c464d8d4548367': dataUri('assets/myth-ottinger.png', 'image/png'),
  '/_blob/0d41c3060668c6909bede0bc4b9118c3': dataUri('assets/part1-old-days.jpg', 'image/jpeg'),
  '/_blob/474c4cd21352e0d81f24511608b2f523': dataUri('assets/part2-new-ways.jpg', 'image/jpeg'),
  '/_blob/ba9cd3996ce10338b698886fa2a9a999': dataUri('assets/part3-this-is-the-way.jpg', 'image/jpeg'),
  '/_blob/5e9cac232f361cad345029dc962472d6': dataUri('assets/cover-robot-cairn.jpg', 'image/jpeg'),
};

const fonts = read('fonts/fonts.css')
  .toString()
  .replace(/url\(([^)]+\.woff2)\)/g, (_, file) => `url(${dataUri(`fonts/${file}`, 'font/woff2')})`);

// The online deck draws <x-shape kind="arrow-right">; here it becomes an inline SVG
// with the head as the last 40% of its length, like the original.
function arrowRight(style) {
  const width = Number(style.match(/width:(\d+)px/)[1]);
  const height = Number(style.match(/height:(\d+)px/)[1]);
  const color = style.match(/background:(#[0-9a-fA-F]+)/)[1];
  const head = width * 0.6;
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" aria-hidden="true">`
    + `<path d="M0 ${height * 0.3} H${head} V0 L${width} ${height / 2} L${head} ${height} V${height * 0.7} H0 Z" fill="${color}"/></svg>`;
}

const deck = JSON.parse(read('project/deck.json'));

const slides = deck.order.map((id) => {
  let html = read(`project/slides/${id}.html`).toString();
  for (const [blob, uri] of Object.entries(assets)) html = html.replaceAll(blob, uri);
  html = html.replace(/<x-shape kind="arrow-right" style="([^"]*)"><\/x-shape>/g, (_, style) => arrowRight(style));
  html = html.replaceAll('background-clip:text', '-webkit-background-clip:text;background-clip:text');
  if (/<x-(shape|icon|connector|embed)/.test(html)) {
    throw new Error(`${id}: uses an element build.mjs can't draw yet`);
  }
  if (html.includes('/_blob/')) throw new Error(`${id}: image missing from assets/`);
  return `<div class="slide">\n${html}</div>`;
});

const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${deck.title}</title>
<style>
${fonts}
* { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
html, body { height: 100%; background: #000; overflow: hidden; }
#stage { position: absolute; left: 50%; top: 50%; width: 1920px; height: 1080px; }
.slide { position: absolute; inset: 0; display: none; }
.slide.current { display: block; }
.slide > section { position: relative; width: 1920px; height: 1080px; overflow: hidden; font-size: 32px; }
h1 { font-size: 96px; font-weight: 600; line-height: 1.1; }
h2 { font-size: 64px; font-weight: 600; line-height: 1.15; }
h3 { font-size: 44px; font-weight: 600; line-height: 1.2; }
p { line-height: 1.4; }
img, svg { display: block; }
aside { display: none; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 0.35em 0.6em; border-bottom: 1px solid rgba(255, 255, 255, 0.12); text-align: left; vertical-align: top; }
th { font-weight: 600; }
@media print {
  @page { size: 1920px 1080px; margin: 0; }
  html, body { height: auto; overflow: visible; background: none; }
  #stage { position: static; transform: none !important; }
  .slide { position: relative; display: block; break-after: page; }
}
</style>
</head>
<body>
<div id="stage">
${slides.join('\n')}
</div>
<script>
const stage = document.getElementById('stage');
const slides = [...document.querySelectorAll('.slide')];
let current = 0;

function fit() {
  const scale = Math.min(innerWidth / 1920, innerHeight / 1080);
  stage.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
}

function show(index) {
  current = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, i) => slide.classList.toggle('current', i === current));
  history.replaceState(null, '', '#' + (current + 1));
}

// As in the online deck, text-align on a header cell aligns its whole column.
for (const table of document.querySelectorAll('table')) {
  const aligns = [...table.rows[0].cells].map((cell) => cell.style.textAlign);
  for (const row of [...table.rows].slice(1)) {
    [...row.cells].forEach((cell, i) => {
      if (aligns[i] && !cell.style.textAlign) cell.style.textAlign = aligns[i];
    });
  }
}

addEventListener('keydown', (event) => {
  if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(event.key)) show(current + 1);
  else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(event.key)) show(current - 1);
  else if (event.key === 'Home') show(0);
  else if (event.key === 'End') show(slides.length - 1);
  else if (event.key === 'f') {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
  } else return;
  event.preventDefault();
});
addEventListener('click', (event) => {
  if (!event.target.closest('a')) show(current + 1);
});
addEventListener('resize', fit);
fit();
show((parseInt(location.hash.slice(1), 10) || 1) - 1);
</script>
</body>
</html>
`;

writeFileSync(join(dir, 'index.html'), page);
console.log(`index.html: ${slides.length} slides, ${(page.length / 1024).toFixed(0)} KB`);
