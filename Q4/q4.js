function evaluateEmployees(employees) {

  // 1. Filter employees who completed more than 5 tasks
  const filtered = employees.filter(emp => emp.tasksCompleted > 5);

  // 2. Map to include only name + performance level
  const performanceMapped = filtered.map(emp => {
    let performance = "";

    if (emp.rating > 4.5) {
      performance = "Excellent";
    } 
    else if (emp.rating >= 3 && emp.rating <= 4.5) {
      performance = "Good";
    } 
    else {
      performance = "Needs Improvement";
    }

    return {
      name: emp.name,
      performance: performance
    };
  });

  // 3. Sort final array in descending order of performance priority
  // Priority: Excellent → Good → Needs Improvement
  const priority = {
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 1
  };

  const sorted = performanceMapped.sort((a, b) => {
    return priority[b.performance] - priority[a.performance];
  });

  // 4. Return sorted array
  return sorted;
}


// Example input
const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluateEmployees(employees));
