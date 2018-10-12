
    let questionList = [
        {
            "question" : "Pytanie1",
            "answerA" : "Odpowiedź1 A",
            "answerB" : "Odpowiedź1 B",
            "answerC" : "Odpowiedź1 C",
            "answerD" : "Odpowiedż1 D",
            "correct" : "Odpowiedź1 A",
        },
        {
            "question" : "Pytanie2",
            "answerA" : "Odpowiedź2 A",
            "answerB" : "Odpowiedź2 B",
            "answerC" : "Odpowiedź2 C",
            "answerD" : "Odpowiedż2 D",
            "correct" : "Odpowiedź2 B",
        },
        {
            "question" : "Pytanie3",
            "answerA" : "Odpowiedź3 A",
            "answerB" : "Odpowiedź3 B",
            "answerC" : "Odpowiedź3 C",
            "answerD" : "Odpowiedż3 D",
            "correct" : "Odpowiedź3 C",
        },
        {
            "question" : "Pytanie4",
            "answerA" : "Odpowiedź4 A",
            "answerB" : "Odpowiedź4 B",
            "answerC" : "Odpowiedź4 C",
            "answerD" : "Odpowiedż4g D",
            "correct" : "Odpowiedź4 D",
        },

];

 let start = document.querySelector('#start');

 let startButton = document.querySelector('#startButton');
 let quizContainer = document.querySelector('#quiz');
 let answers = document.querySelectorAll('.answer');

 
 let round = 0;

 startButton.addEventListener('click', function () {
     start.style.display = 'none';
     quizContainer.style.display = 'block';

     setQuestion();
     round++;

    // console.log(answers);

     for(let i = 0; i < answers.length; i++){
         let answer = answers[i];
         answer.addEventListener('click', function () {
             setQuestion();
             round++;
         })
     }
 });
 
 function setQuestion() {

     document.querySelector('#question').textContent = questionList[round].question;
     document.querySelector('#a').textContent = questionList[round].answerA;
     document.querySelector('#b').textContent = questionList[round].answerB;
     document.querySelector('#c').textContent = questionList[round].answerC;
     document.querySelector('#d').textContent = questionList[round].answerD;

 }
    
    


