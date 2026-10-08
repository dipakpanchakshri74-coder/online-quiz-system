let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];
let timeLeft = 60;
let timer;

const category = localStorage.getItem("category");

let questions =
    category === "computer"
        ? computerQuestions
        : generalQuestions;

document.getElementById("questionNumber").innerText =
    "Question 1 of " + questions.length;

function loadQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("questionNumber").innerText =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    document.getElementById("question").innerText =
        q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {

        const button = document.createElement("button");

        button.innerText = option;
        button.className = "option";

        if (selectedAnswers[currentQuestion] === option) {
            button.classList.add("selected");
        }

        button.onclick = function () {

            selectedAnswers[currentQuestion] = option;

            document.querySelectorAll(".option")
                .forEach(btn => btn.classList.remove("selected"));

            button.classList.add("selected");
        };

        optionsDiv.appendChild(button);
    });

    document.getElementById("prevBtn").style.display =
        currentQuestion === 0 ? "none" : "inline-block";

    document.getElementById("nextBtn").innerText =
        currentQuestion === questions.length - 1
            ? "Submit Quiz"
            : "Next";
}

function nextQuestion() {

    if (currentQuestion === questions.length - 1) {

        calculateScore();
        return;
    }

    currentQuestion++;
    loadQuestion();
}

function previousQuestion() {

    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function calculateScore() {

    score = 0;

    questions.forEach((q, index) => {

        if (selectedAnswers[index] === q.answer) {
            score++;
        }
    });

    clearInterval(timer);

    localStorage.setItem("score", score);
    localStorage.setItem(
        "totalQuestions",
        questions.length
    );

    window.location.href = "result.html";
}

function startTimer() {

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").innerText =
            "Time: " + timeLeft;

        if (timeLeft <= 0) {
            calculateScore();
        }

    }, 1000);
}

loadQuestion();
startTimer();
