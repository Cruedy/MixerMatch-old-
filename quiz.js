const questions = [
    {
        question: "Which team are you on?",
        options: [
            "Swim and Dive",
            "Womens Water Polo",
            "Mens Water Polo"
        ]
    },
    {
        question: "Are you in a committed relationship already?",
        options: [
            "yes",
            "no"
        ]
    },
    {
        question: "What is your gender identity?",
        options: [
            "Woman",
            "Man",
            "Nonbinary"
        ]
    },
    {
        question: "What are your gender preferences?",
        options: [
            "Woman",
            "Man",
            "Everyone"
        ]
    },
    {
        question: "What's your favorite hobby?",
        options: [
            "Pooping",
            "Eating",
            "Pooing",
            "Cooking with Poo"
        ]
    }
]

let currentQuestionIndex = 0;
let completed = 0;

function loadQuestion() {
    const question = document.getElementById("question")
    const options = document.getElementById("options")

    question.textContent = questions[currentQuestionIndex].question;
    options.innerHTML = ""

    for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = questions[currentQuestionIndex].options[i];
        
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        options.appendChild(choicesdiv);
    }
}

loadQuestion()

function loadResponse() {
    const response = document.getElementById("response")
    const matchedPersonName = "Tyler Headley"
    response.textContent = `You are matched with ${matchedPersonName}`
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else{
        document.getElementById("options").remove()
        document.getElementById("question").remove()
        document.getElementById("button").remove()
        loadResponse();
    }
}

function submit() {
    if (completed == questions.length) {
        console.log("completed all the questions");
    } else {
        nextQuestion()
    }
}