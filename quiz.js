
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
 let resultContainer = document.querySelector('#resultContainer');
 let result = document.querySelector('#result');
 let progressBar = document.querySelector('#step');
 let time = document.querySelector('#timer');
 
 let round = 0;
 let score = 0;
 let timerWidth = 100;
 let progressWidth = 0;

 startButton.addEventListener('click', function () {
     start.style.display = 'none';
     quizContainer.style.display = 'block';

     countTime();

     setQuestion();

     for(let i = 0; i < answers.length; i++){
         let answer = answers[i];
         answer.addEventListener('click', function () {

             score = checkResult(answer.textContent, questionList[round].correct, score);
             round++;
             if(questionList[round]){
                 setQuestion();
             }else{
                 function test() {
                     var a = 1;
                     if (a<=2) {
                         showResult();
                         a++
                     }
                     test();
                 }

             }

         })
     }
 });

 function setQuestion() {

     nextStep();

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

 function showResult() {

     if(localStorage.getItem('userScores') === null){
         let userScore = {
             "userGames" : 1,
             "userPointsSum" : score,
             "average" : score
         };
         localStorage.setItem('userScores', JSON.stringify(userScore));

     }  else if(localStorage.getItem('userScores') !== null){
         let userScore = JSON.parse(localStorage.getItem('userScores'));
         console.log(userScore);
         userScore.userGames += 1;
         userScore.userPointsSum += score;
         userScore.average = userScore.userPointsSum/userScore.userGames;
         localStorage.removeItem('userScores');
         localStorage.setItem('userScores', JSON.stringify(userScore));
     }


     quizContainer.style.display = 'none';
     resultContainer.style.display = 'block';
     result.textContent = score;
 }

 function nextStep() {
     timerWidth = 100;
     progressWidth += 100/questionList.length;
     progressBar.style.width = progressWidth + '%';
 }


    function countTime() {
        var timer = setInterval(function(){
            if (timerWidth <= 0) {
                if (questionList[round + 1]) {
                    round++;
                    setQuestion();
                } else {
                    clearInterval(timer);
                    showResult();
                }
            }

            if(!(questionList[round])){
                clearInterval(timer);
                showResult();
            }

            timerWidth--;
            time.style.width = timerWidth + '%';

        }, 200);
    }

