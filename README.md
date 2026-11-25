# Sum up 25 November's world news in one image

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/naldyf/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/naldyf/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Entry for the [make.fun bounty **news-image-20261125**](https://make.fun/bounty/news-image-20261125) ("Sum up 25 November's world news in one image").

## The image

`entry.png` is a vintage newspaper front page, "The World on One Page", generated in web Gemini from a prompt built on verified facts about Wednesday 25 November 2026. The masthead is "THE WORLD ON ONE PAGE", the dateline "WEDNESDAY, NOVEMBER 25, 2026", and a red banner names the three biggest stories: Zelenskiy admitting the Sparta II ship strike, the CIA breach confirmed, and the Houthi strike on the Riyadh tower. Four stat boxes count the day in numbers, and twelve stories fill the page:

1. Shanghai pledges loyalty as purge reaches Politburo
2. CIA says its unclassified system was breached
3. Army to blow up its bomb-chemical stockpile (Iowa)
4. Nvidia shares slide as doubts over Huang linger
5. Huawei found guilty in US trial over Iran business
6. World condemns Riyadh tower strike
7. Sarkozy and wife ordered to stand trial
8. Gunmen seize 25 hostages in supermarket (Cartagena)
9. 5.3 quake shakes Nepal; tremors felt in India
10. Swedish vote to end months without a government
11. Eisenkot clinches first coalition deal
12. Radar fault delays flights into O'Hare

A large world map, "WHERE IT HAPPENED", closes the page with numbered pins for the twelve stories. Facts verified against the day's reporting; see `../analysis/facts-2026-11-25.md` in the working directory (not part of this repo). The image was regenerated once to remove a small-print brief list whose text the generator had garbled, so the submitted page carries only the twelve stories and the map, all spelled cleanly.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` byte for byte to `/output/entry.png`. It never touches the network, and two runs produce identical output. The image is 1024×1024 pixels and 448,033 bytes, under the 1 MiB cap.

Run outside the grader with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT (see `LICENSE`).
