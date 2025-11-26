/*
Challenge 3 — Transform scores
Your system logs raw exam scores:
const scores = [45, 80, 92, 30, 55, 100, 70];

Tasks:
1. Filter out scores below 50.
2. Map the remaining scores to objects like this:
{ score: 80, status: "pass" }
3. Display the new array.
*/
const scores = [45, 80, 92, 30, 55, 100, 70];
// 1. Filter out scores below 50
const filteredScores = scores.filter((score) => score > 50);

// 2. Map the remaining scores to objects
const passedScores = filteredScores.map((score) => ({
  score: score,
  status: "pass",
}));

// 3. Display the new array
console.log(passedScores);
