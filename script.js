
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
var questionCount = -2
var start = document.querySelector("#startButton")
var quizClock = document.querySelector("#clock")
var answer = document.querySelector("#answers")
var questionText = document.getElementById("questionTop")
var result = document.querySelector("#result")
var userScore = 0


//function to start timer, clear welcome message and start button
function startClock() {
    var instructionsClear = document.querySelector("#instructions")
    instructionsClear.textContent = ""
    document.body.appendChild(instructionsClear)
    var buttonClear = document.querySelector("#startButton")
    buttonClear.textContent = ""
    document.body.appendChild(buttonClear)
    setTimer()
    nextQuestion()
}

//set timer function
function setTimer() {
    var countdownTime = setInterval(function() {
        timerClock--
        quizClock.textContent = "Remaining Time:" + timerClock

        if (timerClock === 0){
            clearInterval(countdownTime)
        }
        else if (questionCount === questions.length){
            clearInterval(countdownTime)
        }
    }, 1000)
}

//function to set correct answer, pull question into Text, create answer buttons, increase questionCount by 1
function nextQuestion() {
    questionCount++
    questionText.textContent = questions[questionCount].ask
    answer.innerHTML=""
    var options = questions[questionCount].key
    for (var i = 0; i<options.length; i++) {
        var newKey = document.createElement("button")
        newKey.textContent = options[i]
        answerButton = answer.appendChild(newKey)
    }
  
}

//event listener onto answer choice buttons
answer.addEventListener("click", function(event){

    if (questions[questionCount].correct === event.target.textContent) {
        result.textContent = "That is correct!"
    }
    else {
        result.textContent = "Not correct"
        timerClock = timerClock - 15
    }
    nextQuestion()
})

//event listener on start button
start.addEventListener("click", startClock)
start.addEventListener("click", nextQuestion)

console.log(userScore)