const questions = [
    {
        question: "Are you in a committed relationship already?",
        optionA: "yes",
        optionB: "no"
    },
    {
        question: "Which team are you on?",
        optionA: "Swim and Dive",
        optionB: "Water Polo"
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
        document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
        document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    } 
    if(Object.keys(currentQuestion).length === 5) 
    {
        document.getElementById("display-question").innerHTML = currentQuestion.question;
        document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
        document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
        // document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
        // document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
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
}

console.log(answers)

//called when the next button is called
function handleNextQuestion() {
    storeAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= questions.length-1) {
            console.log(indexNumber)
        //displays next question as long as index number isn't greater than the number of questions
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
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