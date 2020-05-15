var test = 0
console.log(test)

var timer = 120
var questionCount = 0

var start = document.querySelector("#startButton")
var questions = ["Question One", "Question Two", "Question Three", "Question Four", "Question Five", "Question Six"]
var answerOne
var answerTwo


start.addEventListener("click", function() {
    questionCount++
    var question = document.getElementById("questionTop")
    question.textContent = questions[0]
    document.body.appendChild(question)

    var instructionsClear = document.querySelector("#instructions")
    instructionsClear.textContent = ""
    document.body.appendChild(instructionsClear)

    var buttonClear = document.querySelector("#startButton")
    buttonClear.textContent = ""
    document.body.appendChild(buttonClear)
})




