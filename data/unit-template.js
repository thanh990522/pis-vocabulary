/**
 * Copy this file to unit2.js, unit3.js, etc. Replace every placeholder,
 * then register the new file in units.js.
 */
export const unitTemplate = {
  id: "unit-X",
  number: 0,
  title: "Unit title",
  subtitle: "A short, student-friendly introduction to this unit.",
  sections: [
    {
      id: "reading-1",
      label: "Reading 1",
      icon: "📖",
      color: "blue",
      words: [
        {
          word: "example",
          ipa: "/ɪɡˈzæm.pəl/",
          pos: "noun",
          meaning: "ví dụ",
          example: "This is a simple example sentence.",
          translation: "Đây là một câu ví dụ đơn giản.",
          icon: "💡"
        }
      ]
    }
  ]
};

export default unitTemplate;
