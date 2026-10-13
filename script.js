let currentQuestion = 0;
let selectedAnswers = [];
let timeLeft = 300;
let timer;
let isFinished = false;

const category = localStorage.getItem("category");
const subject = subjects[category] || subjects.general;
const questions = subject.questions;
const optionLetters = ["A", "B", "C", "D"];

function loadQuestion() {
    const question = questions[currentQuestion];
    const optionsDiv = document.getElementById("options");

    document.getElementById("questionNumber").textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;
    document.getElementById("questionTag").textContent =
        "QUESTION " + String(currentQuestion + 1).padStart(2, "0");
    document.getElementById("question").textContent = question.question;
    optionsDiv.replaceChildren();

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        const letter = document.createElement("span");
        const label = document.createElement("span");

        button.type = "button";
        button.className = "option-button";
        button.setAttribute("aria-pressed", String(selectedAnswers[currentQuestion] === option));
        if (selectedAnswers[currentQuestion] === option) {
            button.classList.add("selected");
        }

        letter.className = "option-letter";
        letter.setAttribute("aria-hidden", "true");
        letter.textContent = optionLetters[index];
        label.className = "option-label";
        label.textContent = option;
        button.append(letter, label);
        button.addEventListener("click", function () {
            selectedAnswers[currentQuestion] = option;
            localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
            loadQuestion();
        });
        optionsDiv.appendChild(button);
    });

    document.getElementById("subjectName").textContent = subject.name.toUpperCase();
    document.getElementById("prevBtn").disabled = currentQuestion === 0;
    document.getElementById("nextBtn").innerHTML = currentQuestion === questions.length - 1
        ? "Finish quiz <span aria-hidden=\"true\">&#8594;</span>"
        : "Next question <span aria-hidden=\"true\">&#8594;</span>";
    updateProgress();
    renderQuestionGrid();
}

function updateProgress() {
    const answered = selectedAnswers.filter(answer => answer !== undefined).length;
    const percent = Math.round((answered / questions.length) * 100);
    const progressBar = document.getElementById("progressBar");

    document.getElementById("answeredCount").textContent = answered;
    document.getElementById("totalCount").textContent = questions.length;
    document.getElementById("progressText").textContent = percent + "% complete";
    document.getElementById("progressFill").style.width = percent + "%";
    progressBar.setAttribute("aria-valuemax", questions.length);
    progressBar.setAttribute("aria-valuenow", answered);
}

function renderQuestionGrid() {
    const grid = document.getElementById("questionGrid");
    grid.replaceChildren();

    questions.forEach((question, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "question-jump";
        button.textContent = index + 1;
        button.setAttribute("aria-label", "Go to question " + (index + 1));
        if (index === currentQuestion) {
            button.classList.add("current");
            button.setAttribute("aria-current", "step");
        }
        if (selectedAnswers[index] !== undefined) {
            button.classList.add("answered");
        }
        button.addEventListener("click", function () {
            currentQuestion = index;
            loadQuestion();
        });
        grid.appendChild(button);
    });
}

function moveQuestion(direction) {
    const nextIndex = currentQuestion + direction;
    if (nextIndex >= 0 && nextIndex < questions.length) {
        currentQuestion = nextIndex;
        loadQuestion();
    }
}

function finishQuiz(skipConfirmation) {
    if (isFinished) return;

    const unanswered = questions.length - selectedAnswers.filter(answer => answer !== undefined).length;
    if (!skipConfirmation && unanswered > 0) {
        const message = unanswered + " question" + (unanswered === 1 ? " is" : "s are") + " unanswered. Finish anyway?";
        if (!window.confirm(message)) return;
    }

    isFinished = true;
    clearInterval(timer);
    const score = questions.reduce((total, question, index) =>
        total + (selectedAnswers[index] === question.answer ? 1 : 0), 0);

    localStorage.setItem("score", score);
    localStorage.setItem("totalQuestions", questions.length);
    localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
    localStorage.setItem("quizDurationSeconds", 300 - timeLeft);
    window.location.href = "result.html";
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timerElement = document.getElementById("timer");

    timerElement.textContent = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
    timerElement.closest(".timer-box").classList.toggle("timer-warning", timeLeft <= 60);
    if (timeLeft <= 0) finishQuiz(true);
}

document.getElementById("prevBtn").addEventListener("click", function () {
    moveQuestion(-1);
});
document.getElementById("nextBtn").addEventListener("click", function () {
    if (currentQuestion === questions.length - 1) {
        finishQuiz(false);
    } else {
        moveQuestion(1);
    }
});
document.getElementById("submitBtn").addEventListener("click", function () {
    finishQuiz(false);
});
document.getElementById("exitQuiz").addEventListener("click", function (event) {
    if (!window.confirm("Exit now? Your quiz progress will not be saved.")) {
        event.preventDefault();
    }
});

updateTimer();
loadQuestion();
timer = setInterval(function () {
    timeLeft--;
    updateTimer();
}, 1000);
