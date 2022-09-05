var questions = [
    {
        question: 'Grand Central Terminal, Park Avenue, New York is the worlds',
        options: ['largest railway station', 'highest railway station', 'longest railway station', 'None of the above'],
        correctoption: 'largest railway station'
    },
    {
        question: 'How many days are there in a week?',
        options: ['1', '10', '7', '15'],
        correctoption: '7'
    },
    {
        question: 'How many hours are there in a day',
        options: ['365', '60', '24', '81'],
        correctoption: '24'
    },
    {
        question: 'Entomology is the science that studies',
        options: ['Behavior of human beings', 'Insects', 'The origin and history of technical and scientific terms', 'The formation of rocks'],
        correctoption: 'Insects'
    }
];


//fetching Quzi Elements

var question = document.querySelector('#question');
var buttonDiv = document.querySelector('.buttons');
var choicesButton = document.querySelectorAll('button');
var progressStatus = document.querySelector('#progress');
var opt1 = document.querySelector('#btn0');
var opt2 = document.querySelector('#btn1');
var opt3 = document.querySelector('#btn2');
var opt4 = document.querySelector('#btn3');

//--> Varaibels needed for Implementation
var i = 0;
var score = 0;

function loadQuestion() {
    question.innerText = questions[i].question;
    opt1.innerText = questions[i].options[0];
    opt2.innerText = questions[i].options[1];
    opt3.innerText = questions[i].options[2];
    opt4.innerText = questions[i].options[3];

    progressStatus.innerHTML = `Question ${i + 1} of ${questions.length}`;
}

// console.log(choicesButton.length);
// console.log(questions.forEach(element => console.log(element.correctoption)));

choicesButton.forEach(element => {
    // console.log(element.innerHTML);
    element.addEventListener('click', checkAnswersProceed);

});

function showResult() {
    var percentage = (score / questions.length) * 100;
    // console.log(score + " " + questions.length + " " + progressStatus);
    question.innerHTML = `Your Score is ${score} <br>Total Questions : ${questions.length} <br>Percentage :
    ${percentage}%`;
    buttonDiv.innerHTML = "";
    progressStatus.innerHTML = `Quiz completed`;
}

function checkAnswersProceed() {
    console.log(this.innerText);
    var userAnswer = this.innerText;
    if (userAnswer === questions[i].correctoption) {
        score++;
    }
    i++;

    if (i <= questions.length - 1) {
        loadQuestion();
    } else {
        showResult();
    }
}

loadQuestion();

// //hardcored Try

// question.innerText = questions[0].question;
// opt1.innerText = questions[0].options[0];
// opt2.innerText = questions[0].options[1];
// opt3.innerText = questions[0].options[2];
// opt4.innerText = questions[0].options[3];

// progressStatus.innerHTML = `Question 1 of ${questions.length+1}`;



// console.log( questions[0].options[1] + questions[0].options[2] + questions[0].options[3] + questions[0].options[4]);

// console.log( question+ opt1 + opt2 + opt3 + opt4);