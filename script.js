let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Frage",
        "answer_1": "Antwort",
        "answer_2": "Antwort",
        "answer_3": "Antwort",
        "answer_4": "Antwort",
        "right_answer": 3
    },
    {
        "question": "Frage",
        "answer_1": "Antwort",
        "answer_2": "Antwort",
        "answer_3": "Antwort",
        "answer_4": "Antwort",
        "right_answer": 3
    },
    {
        "question": "Frage",
        "answer_1": "Antwort",
        "answer_2": "Antwort",
        "answer_3": "Antwort",
        "answer_4": "Antwort",
        "right_answer": 3
    },
    {
        "question": "Frage",
        "answer_1": "Antwort",
        "answer_2": "Antwort",
        "answer_3": "Antwort",
        "answer_4": "Antwort",
        "right_answer": 3
    },
    {
        "question": "Frage",
        "answer_1": "Antwort",
        "answer_2": "Antwort",
        "answer_3": "Antwort",
        "answer_4": "Antwort",
        "right_answer": 3
    },
    {
        "question": "Frage",
        "answer_1": "Antwort",
        "answer_2": "Antwort",
        "answer_3": "Antwort",
        "answer_4": "Antwort",
        "right_answer": 3
    },
];

let rightQuestions = 0;
let currentQuestion = 0;
let audio_success = new Audio('audio/success.mp3');
let audio_fail = new Audio('audio/wrong.mp3');


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen(){
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('endAllQuestion').innerHTML = questions.length;
    document.getElementById('endResult').innerHTML = rightQuestions;
    document.getElementById('headerImg').src = './img/trophy.png';
}

function updateProgressBar() {
    let percent = (currentQuestion+1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progressBar').innerHTML = `${percent}%`;
    document.getElementById('progressBar').style = `width: ${percent}%;`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(question, selectedQuestionNumber)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audio_success.play();
        rightQuestions++;

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audio_fail.play();
    }

    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(question, selectedQuestionNumber) {
    return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion() {
    currentQuestion++;

    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    showQuestion();

}

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('headerImg').src = './img/bg.jpg';
    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = 'display: none';
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}