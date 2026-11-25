// Entry for make.fun news-image-20261125: "Sum up 25 November's world news in one image".
//
// The image (entry.png) is Noor's web-Gemini vintage newspaper front page,
// "The World on One Page", for Wednesday 25 November 2026. A red banner under
// the masthead names the three biggest stories: Zelenskiy admitting the
// Sparta II ship strike, the CIA breach confirmed, and the Houthi strike on
// the Riyadh tower. Four stat boxes count the day in numbers: 4 Politburo
// members probed since 2025, 11 hurt in the second Riyadh tower strike,
// $100m Shein to pay in an FTC settlement, and 25 hostages seized in a
// Cartagena shop. Three large photo stories lead the page: Shanghai pledging
// loyalty as the purge reaches the Politburo; the CIA saying its unclassified
// system was breached; and the US Army set to blow up its bomb-chemical
// stockpile in Iowa. Nine further headlines fill three columns: Nvidia
// shares sliding as doubts over Huang linger; Huawei found guilty in a US
// trial over Iran business; the world condemning the Riyadh tower strike;
// Sarkozy and his wife ordered to stand trial; gunmen seizing 25 hostages
// in a Cartagena supermarket; a 5.3 quake shaking Nepal with tremors felt in
// India; a Swedish vote to end months without a government; Eisenkot
// clinching a first coalition deal; and a radar fault delaying flights into
// O'Hare. A large world map, "WHERE IT HAPPENED", closes the page with
// numbered pins for the twelve stories. Every fact was verified against the
// day's reporting (see ../analysis/facts-2026-11-25.md); the image was
// regenerated once to remove a small-print brief list whose text the
// generator had garbled, so the submitted page carries only the twelve
// stories and the map, all spelled cleanly.
//
// This program's only job is to place that exact image at /output/entry.png.
// It reads the file and writes it back byte for byte, so two runs produce
// identical output, and it never touches the network.
//
// The competition caps hold by construction: the image this program copies is
// already 1024x1024 pixels and 448033 bytes, under the 1 MiB limit, and the
// program writes nothing else — no resize, no re-encode, no fetch.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(join(here, 'entry.png'));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
console.log(`wrote entry.png (${image.length} bytes) to ${outDir}`);
