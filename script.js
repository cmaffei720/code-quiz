
var questions = [
    {
    ask: "JavaScript is one of the three main languages of the web, along with HTML and:",
    key: ["Python", "CSS", "C++", "Java"],
    correct: "CSS"
    },
    {
    ask: "Variables in JavaScript are like the ___ of programming",
    key: ["Nouns", "Adjectives", "Verbs", "Grammer"],
    correct: "Nouns"
    },
    {
    ask: "A user would be able to access console.log output from the ___ tool",
    key: ["View Page Source", "Network", "Navbar", "Inspector"],
    correct: "Inspector"
    },
    {
    ask: "jQuery is to JavaScript as ____ is to CSS",
    key: ["HTML", "C++", "Bootstrap", "Metaphors"],
    correct: "Bootstrap"
    },
    {
    ask: "querySelector returns an element, while querySelectorAll returns a",
    key: ["class", "data attribute", "number", "array"],
    correct: "array"
    }
]
var timerClock = 120
var questionCount = -1
var start = document.querySelector("#startButton")
var quizClock = document.querySelector("#clock")
var answer = document.querySelector("#answers")
var questionText = document.getElementById("questionTop")
var result = document.querySelector("#result")
var submit = document.querySelector("#Submit")
var submitButton = document.querySelector("#submitButton")
var finalScore = document.querySelector("#finalScore")
var questionsBlock = document.querySelector("#questionsBlock")
var newScoreName = document.querySelector("#name")


//function to start timer, clear welcome message and start button text
function startClock() {
    var instructionsClear = document.querySelector("#instructions")
    instructionsClear.textContent = ""
    document.body.appendChild(instructionsClear)
    start.textContent = ""
    document.body.appendChild(start)
    questionsBlock.setAttribute("class", "d-inline")
    setTimer()

}

//set timer function
function setTimer() {
    var countdownTime = setInterval(function() {
        timerClock--
        quizClock.textContent = "Remaining Time:" + timerClock

        if (timerClock === 0){
            clearInterval(countdownTime)
            finalScore.textContent = "Your score is " + timerClock
            submit.setAttribute("class", "d-inline")
            questionsBlock.setAttribute("class", "d-none")
            var finalScoreTotal = timerClock
            console.log(finalScoreTotal)
            console.log(newScoreName)
        }
        else if (questionCount === questions.length){
            clearInterval(countdownTime)
            finalScore.textContent = "Your score is " + timerClock
            submit.setAttribute("class", "d-inline")
            questionsBlock.setAttribute("class", "d-none")
            var finalScoreTotal = timerClock
            console.log(finalScoreTotal)
            console.log(newScoreName)
            
        }
    }, 1000)
}

//function to set correct answer, pull question into Text, create answer buttons, increase questionCount by 1
function nextQuestion() {
    questionCount = questionCount + 1
    questionText.textContent = questions[questionCount].ask
    answer.innerHTML=""
    var options = questions[questionCount].key
    for (var i = 0; i<options.length; i++) {
        var newKey = document.createElement("button")
        newKey.textContent = options[i]
        answer.appendChild(newKey)
        newKey.setAttribute("class", "btn-block")
    }
  
}

//event listener onto answer choice buttons
answer.addEventListener("click", function(event){
    if (event.target.textContent === questions[questionCount].correct) {
        result.textContent = "That is correct!"
    }
    else {
        result.textContent = "That is not correct"
        timerClock = timerClock - 15
    }
    nextQuestion()
})

//event listener on start button
start.addEventListener("click", startClock)
start.addEventListener("click", nextQuestion)

var id = +localStorage.getItem("id")

//create variables for name and score for completed quiz
//store in local storage
submitButton.addEventListener("click", function(event){
    event.preventDefault()
    user = document.getElementById("name").value
    var score = timerClock
    localStorage.setItem("id", id + 1)
    localStorage.setItem("userName"+id, user)
    localStorage.setItem("score"+id, score)
    window.location = "leaderboard.html"
})