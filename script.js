// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");
var table = document.getElementsByTagName("table")[0];
var tbody = document.querySelector(".tbody");
var scoresArray = []
// Save score to Local Storage
function saveScore() {
  // complete the code here
  if (!nameInput.value.trim() || !scoreInput.value.trim()) {
    return;
  }
  console.log("save...")
  showScores();
}

// Show scores in div
function showScores() {
  console.log("show scoers...");
  let data = "";
  // if(!scoresArray.length){
  //   data +="<tr><th>Name</th><th>Score</th></tr>";
  // }
  // data +=`
  // <tr>
  // <td>${nameInput.value.trim()}</td>
  // <td>${scoreInput.value.trim()}</td>
  // </tr>
  // `

  table.innerHTML +="" 
  let localStorage = JSON.parse(window.localStorage.getItem("scores") ?? '[]');
  window.localStorage.setItem("scores", JSON.stringify([...localStorage, {name:nameInput.value.trim(), score:scoreInput.value.trim()}]));
  scoresArray.push({name:nameInput.value.trim(), score:scoreInput.value.trim()});
  scoresArray.sort((a,b)=>b.score-a.score);
  data +="<tr><th>Name</th><th>Score</th></tr>";
  console.log(scoresArray)
  scoresArray.forEach((el)=>{
   data +=`
  <tr>
  <td>${el.name}</td>
  <td>${el.score}</td>
  </tr>
  `
  })
  table.innerHTML=data

}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementsByTagName("form")[0];
  let scores = window.localStorage.getItem("scores");
  console.log('scores===', scores)
  if (!scores) {
    //table.style.display = "none";
    document.getElementById("scores").textContent ="No scores yet"
  } else {
    scores = JSON.parse(scores);
    scores.sort((a,b)=>b.score-a.score);
    scoresArray = scores;
    let data = "<tr><th>Name</th><th>Score</th></tr>"
    scores.forEach((el) => {
      data += `<tr>
  <td>${el.name}</td>
  <td>${el.score}</td></tr>`
    })
    table.innerHTML += data
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    saveScore();
  })
})
