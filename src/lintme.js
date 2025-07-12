// src/lintme.js

const feedbacks = [
  { message: "Dark mode is great", submitted_at: "2025-07-10T10:00:00Z" },
  { message: "Add filter for metrics", submitted_at: "2025-07-10T11:15:00Z" }
];

// Example: find feedbacks containing the word 'dark'
function filterFeedbacksByKeyword(keyword) {
  return feedbacks.filter((item) => {
    return item.message.toLowerCase().includes(keyword.toLowerCase());
  });
}

// Missing semicolon — will trigger ESLint
console.log(filterFeedbacksByKeyword("dark"));
