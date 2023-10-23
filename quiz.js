const questions = [
    {
        question: "Which team are you on?",
        optionA: "Swim and Dive",
        optionB: "Womens Water Polo",
        optionC: "Mens Water Polo"
    },
    {
        question: "Are you in a committed relationship already?",
        optionA: "yes",
        optionB: "no"
    },
    {
        question: "What is your gender identity?",
        optionA: "Woman",
        optionB: "Man",
        optionC: "Nonbinary"
    },
    {
        question: "What are your gender preferences?",
        optionA: "Woman",
        optionB: "Man",
        optionC: "Everyone"
    },
    {
        question: "What's your favorite hobby?",
        optionA: "Pooping",
        optionB: "Eating",
        optionC: "Pooing",
        optionD: "Cooking with Poo"

    }
]

let questionNumber = 1 //holds the current question number
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    const currentQuestion = questions[index]
    console.log(currentQuestion)
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    if(Object.keys(currentQuestion).length === 3) 
    {
        document.getElementById("display-question").innerHTML = currentQuestion.question;
        document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
        document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
        document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
        document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
        document.getElementById("option-three").hidden = true;
        document.getElementById("option-three-label").hidden = true;
        document.getElementById("option-four").hidden = true;
        document.getElementById("option-four-label").hidden = true;
    } 
    if(Object.keys(currentQuestion).length === 4) 
    {
        document.getElementById("option-three").hidden = false;
        document.getElementById("option-three-label").hidden = false;
        document.getElementById("display-question").innerHTML = currentQuestion.question;
        document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
        document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
        document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
        document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
        document.getElementById("option-four").hidden = true;
        document.getElementById("option-four-label").hidden = true;
    }
    if(Object.keys(currentQuestion).length === 5) 
    {
        document.getElementById("option-three").hidden = false;
        document.getElementById("option-three-label").hidden = false;
        document.getElementById("option-four").hidden = false;
        document.getElementById("option-four-label").hidden = false;
        document.getElementById("display-question").innerHTML = currentQuestion.question;
        document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
        document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
        document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
        document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    }
}

let answers = []

function storeAnswer() {
    const options = document.getElementsByName("option"); //gets all elements with name of 'option' (in this the radio inputs)

    options.forEach((option) => {
        if(option.checked === true){
            answers.push(option.value)
            indexNumber++
        }
    })
    if (indexNumber == 2 && answers[1] == "optionA")
    {
        indexNumber = 4;
        answers.push("null");
        answers.push("null");
        console.log(answers);
    }
}

console.log(answers);

//called when the next button is called
function handleNextQuestion() {
    storeAnswer()
    unCheckRadioButtons()
    if (indexNumber <= questions.length-1) {
    //displays next question as long as index number isn't greater than the number of questions
        NextQuestion(indexNumber)
    }
    else {
        handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
    }
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = "Just wait your results will be out soon"

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark

}