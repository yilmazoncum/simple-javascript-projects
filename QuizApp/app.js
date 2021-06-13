function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;
}


function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0
}

Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isFinish = function () {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();

    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}


var questions = [
    new Question(
        "what's the best programming language ?",
        ["C#", "javascript", "python", "asp.net"],
        "javascript"
    ),
    new Question(
        "what's the most popular programming language ?",
        ["c#", "visual basic", "nodejs", "javascript"],
        "javascript"
    ),
    new Question(
        "what's the best modern programming language ?",
        ["C#", "javascript", "python", "asp.net"],
        "javascript"
    ),
];

function loadQuestion() {
    if (quiz1.isFinish()) {
        showScore();
    } else {

        var question = quiz1.getQuestion();
        var choices = question.choices;

        document.querySelector('#question').textContent = question.text;

        for (var i = 0; i < choices.length; i++) {
            var element = document.querySelector('#choice' + i);
            element.innerHTML = choices[i];
            guess('btn' + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id, guess) {
    var btn = document.getElementById(id);
    btn.onclick = function () {
        quiz1.guess(guess);
        loadQuestion()
    }
}

function showScore() {
    var html = `<h2>Score</h2><h4>${quiz1.score}</h4>`;

    document.querySelector('.card-body').innerHTML = html;
}

function showProgress() {
    var totalQuestion = quiz1.questions.length;
    var questionNumber = quiz1.questionIndex + 1;
    var html = 'Question ' + questionNumber + ' of ' + totalQuestion;

    if (totalQuestion === questionNumber) {
        document.querySelector('#progress').innerHTML = "Quiz is Ended";
    } else {
        document.querySelector('#progress').innerHTML = html;
    }


}


// Start Quiz

var quiz1 = new Quiz(questions);

loadQuestion();