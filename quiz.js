
    let questionList = [
        {
            "question" : "Pytanie1",
            "answerA" : "Poprawna A",
            "answerB" : "Odpowiedź1 B",
            "answerC" : "Odpowiedź1 C",
            "answerD" : "Odpowiedż1 D",
            "correct" : "Poprawna A",
        },
        {
            "question" : "Pytanie2",
            "answerA" : "Odpowiedź2 A",
            "answerB" : "Poprawna B",
            "answerC" : "Odpowiedź2 C",
            "answerD" : "Odpowiedż2 D",
            "correct" : "Poprawna B",
        },
        {
            "question" : "Pytanie3",
            "answerA" : "Odpowiedź3 A",
            "answerB" : "Odpowiedź3 B",
            "answerC" : "Odpowiedź3 C",
            "answerD" : "Poprawna D",
            "correct" : "Poprawna D",
        },
        {
            "question" : "Pytanie4",
            "answerA" : "Odpowiedź4 A",
            "answerB" : "Poprawna B",
            "answerC" : "Odpowiedź4 C",
            "answerD" : "Odpowiedź4 D",
            "correct" : "Poprawna B",
        },

];

 let start = document.querySelector('#start');

 let startButton = document.querySelector('#startButton');
 let quizContainer = document.querySelector('#quiz');
 let answers = document.querySelectorAll('.answer');
 let resultContainer = document.querySelector('#resultConteiner');
 let result = document.querySelector('#result');

 
 let round = 0;
 let score = 0;

 startButton.addEventListener('click', function () {
     start.style.display = 'none';
     quizContainer.style.display = 'block';

     setQuestion();
     move();

     for(let i = 0; i < answers.length; i++){
         let answer = answers[i];
         answer.addEventListener('click', function () {

             score = checkResult(answer.textContent, questionList[round].correct, score);

             if(questionList[round+1]){
                 round++;
                 setQuestion();
                 move();
             }else{
                 quizContainer.style.display = 'none';
                 resultContainer.style.display = 'block';
                 result.textContent = score;
             }

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


 function checkResult(answer, correctAnswer, score) {

     if(answer === correctAnswer) {
         return score + 1;
     }
     return score;
 }


 function move() {
        var elem = document.getElementById("myBar");
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width+=25;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }
    }



