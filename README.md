# PIS Vocabulary Adventure

Interactive vocabulary website for Viet Anh School, Level PIS.

- Teacher: Mr. Hà Chí Thanh
- Current content: Units 1–10 — 774 reviewed vocabulary items
- Course configuration: all units are published through one reusable data schema
- Sections: Reading, Listening, Speaking, and Writing in every unit
- Modes in every section: Learn, Flashcards, Matching Meaning
- Pronunciation: Cambridge Dictionary US audio links with a browser US-voice fallback

## Complete IELTS Bands 4–5 review

The course was reviewed against the Student's Book and Teacher's Book, including the Student's Book recording scripts. Vocabulary counts follow the language needed in each unit rather than a fixed quota.

- 455 retained core items, 209 expanded items, and 110 higher-level items
- 460 Reading, 104 Listening, 80 Speaking, and 130 Writing items
- 41 B1, 588 B1–B2, and 145 B2 items
- Newly added entries include American English IPA, part of speech/type, CEFR level, concise English definition, Vietnamese meaning, one simple example sentence, and a book/script source
- Listening additions are drawn mainly from the recording scripts; Speaking and Writing additions include useful collocations and task language from their unit pages

## Content review

The source list was standardised before publishing. Key corrections include:

- converted the supplied British-style IPA to American English IPA;
- corrected the verb stress in `conduct` to `/kənˈdʌkt/`;
- normalised `locals` and `strangers` to the teachable base forms `local` and `stranger`;
- corrected `outskirt` to the standard plural noun `outskirts`;
- clarified `influence / be influenced by` and its Vietnamese meaning;
- refined inaccurate or unnatural meanings/examples for `social`, `medicine`, `pleasure`, `boating`, `common`, and `private`;
- corrected phrase labels such as `basic needs` and `university qualification` to `noun phrase`.
- corrected Unit 9's title to `Every Drop Counts`;
- fixed clear pronunciation, grammar, part-of-speech, and example errors such as `corps`, `occupation`, `theory`, `implication`, `commission`, and `downbeat`;
- normalised teachable forms such as `get rid of`, `rush hour`, `irrigate`, `snake`, and `multifunctional` while retaining source forms in the data where useful.

## Structure

```text
index.html       Page structure and school branding
styles.css       Responsive blue–teal–yellow cartoon theme
app.js           Dynamic unit loader, tabs, audio, flashcards, matching, and progress
data/units.js    Central registry for Units 1–10
data/unit1.js … data/unit10.js    Reviewed vocabulary data for the full course
data/stats.json   Machine-readable coverage totals by unit and IELTS skill
data/unit-template.js  Reusable schema for every new unit
```

## Add another unit

1. Copy `data/unit-template.js` to the new file, such as `data/unit2.js`.
2. Fill in the unit metadata and add any number of sections. Each section can be Reading, Listening, Speaking, Writing, Vocabulary, or another label.
3. In `data/units.js`, change that unit's `status` to `"available"` and set `module` to its file path, such as `"./data/unit2.js"`.

No changes to `index.html`, `app.js`, the flashcards, matching exercise, audio system, or progress tracking are required. The unit selector, section tabs, statistics, page title, and student progress update automatically.

The site is dependency-free and can be hosted directly with GitHub Pages.
