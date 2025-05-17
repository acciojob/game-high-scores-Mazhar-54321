// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");
var table = document.getElementsByTagName("table")[0];
var tbody = document.querySelector(".tbody")
// Save score to Local Storage
function saveScore() {
  // complete the code here
	if(!nameInput.value.trim() || !scoreInput.value.trim()){
		return;
	}
  console.log("save...")
  showScores();
}

// Show scores in div
function showScores() {
  // complete the code
  console.log("show scoers...")
  //scores.textContent="";
  table.innerHTML +=`
  <tr>
  <td>${nameInput.value.trim()}</td>
  <td>${scoreInput.value.trim()}</td>
  </tr>
  `
  let localStorage =JSON.parse(window.localStorage.getItem("scores")??'[]');
  window.localStorage.setItem("scores",JSON.stringify([...localStorage,[nameInput.value.trim(),scoreInput.value.trim()]]))
}
document.addEventListener("DOMContentLoaded",function () {
const form = document.getElementsByTagName("form")[0];
let scores = window.localStorage.getItem("scores");
console.log('scores===',scores)
if(!scores){
   //table.style.display = "none";
}else{
  //document.getElementById("scores").textContent=""
 scores=JSON.parse(scores);
 let data=""
 scores.forEach((el)=>{
  data+=`<tr>
  <td>${el[0]}</td>
  <td>${el[1]}</td></tr>`
 })
 table.innerHTML+=data 
}
form.addEventListener("submit",function(event){
  event.preventDefault();
  saveScore();
})	
})
