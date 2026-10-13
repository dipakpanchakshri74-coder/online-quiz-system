const generalQuestions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Pune", "Nagpur"],
        answer: "Delhi"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which is the largest ocean?",
        options: ["Indian", "Pacific", "Atlantic", "Arctic"],
        answer: "Pacific"
    },
    {
        question: "Which language is mainly used to create web pages?",
        options: ["HTML", "Python", "Java", "C"],
        answer: "HTML"
    }
];

const computerQuestions = [
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Unit",
            "Control Processing Unit"
        ],
        answer: "Central Processing Unit"
    },
    {
        question: "Which language is used for web page styling?",
        options: ["HTML", "CSS", "Java", "SQL"],
        answer: "CSS"
    },
    {
        question: "Which language is used to make web pages interactive?",
        options: ["CSS", "HTML", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "Which device is used to input text?",
        options: ["Monitor", "Keyboard", "Speaker", "Printer"],
        answer: "Keyboard"
    },
    {
        question: "What does RAM stand for?",
        options: [
            "Random Access Memory",
            "Read Access Memory",
            "Rapid Access Machine",
            "Random Application Memory"
        ],
        answer: "Random Access Memory"
    }
];

const scienceQuestions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Which part of a plant absorbs most of its water?",
        options: ["Leaves", "Flowers", "Roots", "Stem"],
        answer: "Roots"
    },
    {
        question: "How many bones are in the typical adult human body?",
        options: ["106", "206", "306", "406"],
        answer: "206"
    },
    {
        question: "Which force keeps planets in orbit around the Sun?",
        options: ["Friction", "Magnetism", "Gravity", "Electricity"],
        answer: "Gravity"
    },
    {
        question: "What is the closest star to Earth?",
        options: ["Sirius", "The Sun", "Proxima Centauri", "Polaris"],
        answer: "The Sun"
    }
];

const mathematicsQuestions = [
    {
        question: "What is 12 multiplied by 8?",
        options: ["84", "88", "96", "108"],
        answer: "96"
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        answer: "12"
    },
    {
        question: "Which of these numbers is prime?",
        options: ["21", "27", "29", "33"],
        answer: "29"
    },
    {
        question: "How many degrees are in a right angle?",
        options: ["45", "90", "180", "360"],
        answer: "90"
    },
    {
        question: "What is 3/4 written as a percentage?",
        options: ["25%", "50%", "70%", "75%"],
        answer: "75%"
    }
];

const historyQuestions = [
    {
        question: "In which year did the first person land on the Moon?",
        options: ["1959", "1965", "1969", "1972"],
        answer: "1969"
    },
    {
        question: "Which ancient civilization built the pyramids at Giza?",
        options: ["Romans", "Egyptians", "Greeks", "Persians"],
        answer: "Egyptians"
    },
    {
        question: "Who was the first president of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
        answer: "George Washington"
    },
    {
        question: "The Renaissance began in which country?",
        options: ["France", "Italy", "England", "Spain"],
        answer: "Italy"
    },
    {
        question: "Which city was divided by a wall from 1961 to 1989?",
        options: ["Prague", "Berlin", "Vienna", "Warsaw"],
        answer: "Berlin"
    }
];

const subjects = {
    general: { name: "General knowledge", questions: generalQuestions },
    computer: { name: "Computer science", questions: computerQuestions },
    science: { name: "Science", questions: scienceQuestions },
    mathematics: { name: "Mathematics", questions: mathematicsQuestions },
    history: { name: "History", questions: historyQuestions }
};
