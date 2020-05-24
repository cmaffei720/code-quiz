var startOver = document.querySelector("#startOver")
var clear = document.querySelector("#clear")
var leaderboard = document.querySelector("#leaderboard")
var nameDiv = document.querySelector("#name")
var scoreDiv = document.querySelector("#score")
var highScores = document.querySelector("#highScores")
var id = +localStorage.getItem("id")

function displayScores(){
    var id = +localStorage.getItem("id")
for (m=0; m < id; m++) {
var scores = localStorage.getItem("score"+m)
var name = localStorage.getItem("userName"+m)
var newEntry = document.createElement("div")
newEntry.setAttribute("class", "col-4 m-1 bg-light name")
newEntry.setAttribute("id", m)
newEntry.textContent = name + " - " + scores
document.body.appendChild(newEntry)
var breakEl = document.createElement("br")
document.body.appendChild(breakEl)
}
}

displayScores()

function clearScores(){
   for (b = 0; b < id; b++){
    document.getElementById(b).innerText = ""
   }
}

clear.addEventListener("click", function(event){
    for (a=0; a < id; a++){
    localStorage.removeItem("userName"+a, "")
    localStorage.removeItem("score"+a, "")
    }
    clearScores()
    localStorage.setItem("id", 0)
})
