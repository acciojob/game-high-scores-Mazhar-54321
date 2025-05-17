const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scoresDiv = document.getElementById("scores");
const table = document.querySelector("table");

// Save score to Local Storage
function saveScore() {
  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  if (!name || !score) return;

  // Get existing scores
  let scores = JSON.parse(localStorage.getItem("scores") || "[]");

  // Add new score to the beginning
  scores.unshift([name, score]);

  // Save back to localStorage
  localStorage.setItem("scores", JSON.stringify(scores));

  // Refresh display
  showScores();

  // Clear input fields
  nameInput.value = '';
  scoreInput.value = '';
}

// Show scores in table
function showScores() {
  const scores = JSON.parse(localStorage.getItem("scores") || "[]");

  // Clear table
  table.innerHTML = '';

  if (scores.length === 0) {
    scoresDiv.innerHTML = "No scores yet";
    return;
  }

  // Add header row
  let data = `<tr><th>Name</th><th>Score</th></tr>`;

  // Add all scores (already in desired order)
  scores.forEach(([name, score]) => {
    data += `<tr><td>${name}</td><td>${score}</td></tr>`;
  });

  table.innerHTML = data;
  scoresDiv.innerHTML = ''; // Ensure we don't show "No scores yet"
}

// On page load
document.addEventListener("DOMContentLoaded", showScores);
