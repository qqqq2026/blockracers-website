// Fails the build if built HTML contains em or en dashes, or references external hosts for scripts, styles or fonts.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const files = [];
(function walk(d){ for (const f of readdirSync(d)) { const p = join(d,f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })('dist');
let bad = 0;
for (const f of files) {
  const t = readFileSync(f, 'utf8');
  if (/[\u2013\u2014]/.test(t)) { console.error(`dash found in ${f}`); bad++; }
  if (/<script[^>]+src="https?:\/\//i.test(t) || /<link(?=[^>]*rel="(stylesheet|preload|modulepreload|preconnect|dns-prefetch)")[^>]+href="https?:\/\//i.test(t)) { console.error(`external script/style in ${f}`); bad++; }
  if (/fonts\.googleapis|googletagmanager|google-analytics/i.test(t)) { console.error(`external font/tracker in ${f}`); bad++; }
}
if (bad) process.exit(1);
console.log(`check-copy: ${files.length} pages OK (no dashes, no external scripts, fonts or trackers)`);
