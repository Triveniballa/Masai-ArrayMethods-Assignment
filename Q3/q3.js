function countCategories(categories) {
  // 1. Use reduce() to count occurrences
  const result = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return result; // basic requirement
}


// 🔥 Extra Challenge: Sort categories by count (descending)
function sortedCategories(categories) {
  const counts = countCategories(categories);

  // Convert to array → sort → extract only category names
  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1]) // sort by count desc
    .map(item => item[0]);       // keep only category names

  return sorted;
}


// Example Input
const categories = [
  "electronics", "clothing", "electronics",
  "toys", "clothing", "toys", "toys"
];

console.log("Category Counts:", countCategories(categories));
console.log("Sorted Categories:", sortedCategories(categories));
