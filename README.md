# PIS Vocabulary Adventure

Interactive vocabulary website for Viet Anh School, Level PIS.

- Teacher: Mr. Hà Chí Thanh
- Current content: Units 1–10 — 455 reviewed vocabulary items
- Course configuration: all units are published through one reusable data schema
- Sections: Reading, Listening, and Writing as supplied in each unit
- Modes in every section: Learn, Flashcards, Matching Meaning
- Pronunciation: Cambridge Dictionary US audio links with a browser US-voice fallback

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
data/unit-template.js  Reusable schema for every new unit
```

## Add another unit

1. Copy `data/unit-template.js` to the new file, such as `data/unit2.js`.
2. Fill in the unit metadata and add any number of sections. Each section can be Reading, Listening, Writing, Vocabulary, or another label.
3. In `data/units.js`, change that unit's `status` to `"available"` and set `module` to its file path, such as `"./data/unit2.js"`.

No changes to `index.html`, `app.js`, the flashcards, matching exercise, audio system, or progress tracking are required. The unit selector, section tabs, statistics, page title, and student progress update automatically.

The site is dependency-free and can be hosted directly with GitHub Pages.
