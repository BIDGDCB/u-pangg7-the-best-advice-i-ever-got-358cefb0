// The Best Advice I Ever Got.
// One sentence on the best advice ever received: "Done is better
// than perfect." The twist is the confession wrapped around it —
// years spent polishing nothing, and the world only answering back
// once the work finally shipped. Advice that earns its keep.
//
// Run: node main.ts  (writes /output/entry.txt; override with
// MAKEFUN_OUTPUT_DIR for a local run)
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  "Best advice I ever got: 'Done is better than perfect.' I spent years polishing nothing. Now I ship, and the world finally answers back.";

if ([...ENTRY].length > 200) throw new Error('entry over 200 characters');
if (!ENTRY.trim()) throw new Error('entry is empty');
if (ENTRY.includes('\n')) throw new Error('entry must be a single line');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), ENTRY, 'utf8');
console.log(ENTRY);
