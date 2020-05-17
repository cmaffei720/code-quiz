var startOver = document.querySelector("#startOver")
var clear = document.querySelector("#clear")
var leaderboard = document.querySelector("#leaderboard")

var scores = localStorage.getItem("score")
var name = localStorage.getItem("userName")


document.body.appendChild(scores)
document.body.appendChild(name)

startOver.setAttribute("href", "./index.html")

clear.addEventListener("click", function(event){
    localStorate.setItem("userName", "")
    localStorage.setItem("score", "")
})

console.log(userName)