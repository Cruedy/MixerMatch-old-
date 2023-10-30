const questions = [
    {
        question: "What's your name",
        inputType: "textBox",
        options: ["Null"]
    },
    {
        question: "Which team are you on?",
        inputType: "choice",
        options: [
            "Swim and Dive",
            "Womens Water Polo",
            "Mens Water Polo"
        ]
    },
    {
        question: "Are you in a committed relationship already?",
        inputType: "choice",
        options: [
            "yes",
            "no"
        ]
    },
    {
        question: "What is your gender identity?",
        inputType: "choice", 
        options: [
            "Woman",
            "Man",
            "Nonbinary"
        ]
    },
    {
        question: "What are your gender preferences?",
        inputType: "choice", 
        options: [
            "Woman",
            "Man",
            "Everyone"
        ]
    },
    {
        question: "What's your favorite hobby?",
        inputType: "choice",
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
let answers = [];

function loadQuestion() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");
    const textBox = document.getElementById("textBox");

    question.textContent = questions[currentQuestionIndex].question;
    options.innerHTML = "";

    for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        if(questions[currentQuestionIndex].inputType == "textBox"){
            choice.type = "text";
            choice.id = "options";
            choice.value = "";
            console.log(choice);
            choicesdiv.appendChild(choice);
            choicesdiv.appendChild(choiceLabel);
            textBox.appendChild(choicesdiv);
            break;
        }
        else if(document.getElementById("textBox") != null)
        {
            document.getElementById("textBox").remove();
        }

        choiceLabel.textContent = questions[currentQuestionIndex].options[i];

        console.log(choiceLabel.textContent, "optionNums");
        
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        options.appendChild(choicesdiv);
    }
}

loadQuestion()

function storeAnswer() {
    const responses = document.getElementsByName("answer");
    responses.forEach((response) => {
        if(response.type == "radio" && response.checked == true)
        {
            answers.push(response.value);
        }
        else if(response.type == "text")
        {
            answers.push(response.value);
        }
    })
    console.log(answers, "answers");
}

function loadResponse() {
    const response = document.getElementById("response")
    const matchedPersonName = "Tyler Headley"
    response.textContent = `You are matched with ${matchedPersonName}`
}

function nextQuestion() {
    storeAnswer();
    if (currentQuestionIndex < questions.length - 1) {
        console.log(currentQuestionIndex, "index");
        currentQuestionIndex++;
        loadQuestion();
    } else{
        console.log(document);
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