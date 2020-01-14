
var startButton = document.getElementById("startbutton");
var timeRemaining = document.querySelector(".timer");
var highScores = document.querySelector(".highscores");
var modal = document.querySelector("staticBackdrop");
var modalHeader = document.getElementById("staticBackdropLabel");
var modalBody = document.getElementById("staticBackdropBody");
var score = document.getElementById("score");
var time;
var playerScore;
var sec;
var response1 = document.getElementById("button1");
var response2 = document.getElementById("button2");
var response3 = document.getElementById("button3");
var response4 = document.getElementById("button4");
var answer;
var answer1;

var playerArray;
var scoreArray;
var usersArray;


function setTimer() {
  sec = 75;
  setInterval(function() {
    document.getElementById("timer").innerHTML = `Time: ` + sec;
    sec--;
    if (sec <= 0) {


      setStorage();
      // var userID = prompt(`Time's up! Your score: ` + score + `   Please enter your initials!`);

      // playerArray = JSON.parse(window.localStorage.getItem('names')) || [];
      // scoreArray = JSON.parse(window.localStorage.getItem('scores')) || [];

      
      // var player = {
      //   name: userID,
      //   score: playerScore
      // }

      

      // // usersArray.push(player);


      // var playerString = JSON.stringify(playerArray);
      // var scoreString = JSON.stringify(scoreArray);


      // localStorage.setItem('names', playerString);
      // localStorage.setItem('scores', scoreString);
      

      // window.localStorage.setItem('user', JSON.stringify(player));
      
      
      // document.getElementById("timer").innerHTML = 0;
      
      //   location.href = "highscores.html";
        

      }
    }, 1000);
  }
  

function setStorage() {

  var userID = prompt(`Time's up! Your score: ` + playerScore + `   Please enter your initials!`);
  // var player = {
  //   name: userID,
  //   score: playerScore
  // }

  playerArray = JSON.parse(localStorage.getItem('players')) || [];
  scoreArray = JSON.parse(localStorage.getItem('scores')) || [];

  playerArray.push(userID);
  scoreArray.push(playerScore);

  var usersString = JSON.stringify(playerArray);
  var scoresString = JSON.stringify(scoreArray);

  console.log(usersString);
  console.log(scoresString);

  localStorage.setItem('players', usersString);
  localStorage.setItem('scores', scoresString);


}
  
  function setScore() {
    playerScore = 0;
    score.textContent = `Score: ` + playerScore;
  }
  
  function timePenalty() {
    sec = sec - 15;
    return;
  }
  
  function scoreMath() {
    
  playerScore = playerScore + sec
  score.textContent = `Score: ` + playerScore;
  return;
  
}


function renderQuestions1() {
  
  modalHeader.textContent = questions[0].title;
  response1.textContent = questions[0].choices[0];
  response2.textContent = questions[0].choices[1];
  response3.textContent = questions[0].choices[2];
  response4.textContent = questions[0].choices[3];
  answer = questions[0].answer;
  
  modalBody.addEventListener("click", function(event) {
    var element = event.target;
    
    if (element.matches("button") === true) {
      if (element.textContent === answer) {
        scoreMath();
        renderQuestions2();
      } else {
        timePenalty();
        renderQuestions2();

      }
    }
  })
  
}

function renderQuestions2() {

  modalHeader.textContent = questions[1].title;
  response1.textContent = questions[1].choices[0];
  response2.textContent = questions[1].choices[1];
  response3.textContent = questions[1].choices[2];
  response4.textContent = questions[1].choices[3];
  answer = questions[1].answer;

  modalBody.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches("button") === true) {
          if (element.textContent === answer) {
 
          renderQuestions3();
        } else {
          renderQuestions3();
        }
      }
      })     
      
} 

function renderQuestions3() {

  modalHeader.textContent = questions[2].title;
  response1.textContent = questions[2].choices[0];
  response2.textContent = questions[2].choices[1];
  response3.textContent = questions[2].choices[2];
  response4.textContent = questions[2].choices[3];
  answer = questions[2].answer;

  modalBody.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches("button") === true) {
          if (element.textContent === answer) {
 
          renderQuestions4();
        } else {

          renderQuestions4();
        }
      }
      })     
      
} 

function renderQuestions4() {

  modalHeader.textContent = questions[3].title;
  response1.textContent = questions[3].choices[0];
  response2.textContent = questions[3].choices[1];
  response3.textContent = questions[3].choices[2];
  response4.textContent = questions[3].choices[3];
  answer = questions[3].answer;

  modalBody.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches("button") === true) {
          if (element.textContent === answer) {
 
          renderQuestions5();
        } else {

          renderQuestions5();
        }
      }
      })     
      
} 

function renderQuestions5() {

  modalHeader.textContent = questions[4].title;
  response1.textContent = questions[4].choices[0];
  response2.textContent = questions[4].choices[1];
  response3.textContent = questions[4].choices[2];
  response4.textContent = questions[4].choices[3];
  answer = questions[4].answer;

  modalBody.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches("button") === true) {
          if (element.textContent === answer) {

        } else {

        }
      }
      })     
      
} 


function questionsFunction() {

  renderQuestions1();



}

// event listener for startButton pops modal and begins quiz, sets timer to 75 and counts down

startButton.addEventListener("click", function(event) {
  
  event.preventDefault();

  console.log(answer1);

  setTimer();
  setScore();
  
  
  
    questionsFunction();


}); 
  