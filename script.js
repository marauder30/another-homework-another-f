
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



function setTimer() {
  sec = 75;
  setInterval(function() {
    document.getElementById("timer").innerHTML = `Time: ` + sec;
    sec--;
    if (sec == 00) {
      var userID = prompt(`Time's up! Your score: ` + score + `   Please enter your initials!`);
      
      var player = {
        name: userID,
        score: playerScore
      }
      
      window.localStorage.setItem('user', JSON.stringify(player));
      
      console.log(player);
      
      document.getElementById("timer").innerHTML = 0;
      
        location.href = "highscores.html";
        

      }
    }, 1000);
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
  console.log(playerScore);
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
 
          console.log(playerScore);
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
  


// cmon billy



// function renderQuestions() {

//   for (var i = 0; i < questions.length; i++) {

//     modalHeader.innerHTML = questions[i].title;
//     response1.textContent = questions[i].choices[0];
//     response2.textContent = questions[i].choices[1];
//     response3.textContent = questions[i].choices[2];
//     response4.textContent = questions[i].choices[3];
//     answer = questions[i].answer;

//     modalBody.addEventListener("click", function(event) {
//       var element = event.target;

//       if (element.matches("button") === true) {

//         if (element.textContent === answer) {
 
//           scoreMath();
//           console.log(playerScore);
//         } else {

//           sec -= 15;
//         }

//       } 
//     })
//   }
// }




// function renderQuestions2() {

//     modalHeader.innerHTML = questions[i].title;

  
// } 




// function question1() {

//   modalHeader.innerHTML = questions[0].title;
//   response1.textContent = questions[0].choices[0];
//   response2.textContent = questions[0].choices[1];
//   response3.textContent = questions[0].choices[2];
//   response4.textContent = questions[0].choices[3];
//   answer = questions[0].answer;

//   console.log(answer);

//   modalBody.addEventListener("click", function(event) {
//     var element = event.target;

//     console.log(element.textContent);

//     if (element.matches("button") === true) {

//       if (element.textContent === answer) {

//         scoreMath();
//         score.textContent = `Score: ` + playerScore;

//       } else {
//         sec -= 15;
//       }

//       question2();
//     }
//   })
//   function question2() {
  
//     modalHeader.innerHTML = "";
//     response1.textContent = "";
//     response2.textContent = "";
//     response3.textContent = "";
//     response4.textContent = "";
  
//     modalHeader.innerHTML = questions[1].title;
//     response1.textContent = questions[1].choices[0];
//     response2.textContent = questions[1].choices[1];
//     response3.textContent = questions[1].choices[2];
//     response4.textContent = questions[1].choices[3];
//     answer = questions[1].answer;
  
//     console.log(answer);
  
//     modalBody.addEventListener("click", function(event) {
//       var element = event.target;
  
//       console.log(element.textContent);
  
//       if (element.matches("button") === true) {
  
//         if (element.textContent === answer) {
//           scoreMath();
//           score.textContent = `Score: ` + playerScore;
  
//         } else {
//           sec -= 15;
//         }
  
//       }
//       question3();
//     })
  
//   }

// }
// function question3() {

//   modalHeader.innerHTML = "";
//   response1.textContent = "";
//   response2.textContent = "";
//   response3.textContent = "";
//   response4.textContent = "";

//   modalHeader.innerHTML = questions[2].title;
//   response1.textContent = questions[2].choices[0];
//   response2.textContent = questions[2].choices[1];
//   response3.textContent = questions[2].choices[2];
//   response4.textContent = questions[2].choices[3];
//   answer = questions[2].answer;

//   console.log(answer);

//   modalBody.addEventListener("click", function(event) {
//     var element = event.target;

//     console.log(element.textContent);

//     if (element.matches("button") === true) {

//       if (element.textContent === answer) {
//         playerScore += sec;
//         score.textContent = `Score: ` + playerScore;
//         question4();

//       } else {
//         sec -= 15;
//         question4();
//       }
//     }
//   })

// }
// function question4() {

//   modalHeader.innerHTML = questions[3].title;
//   response1.textContent = questions[3].choices[0];
//   response2.textContent = questions[3].choices[1];
//   response3.textContent = questions[3].choices[2];
//   response4.textContent = questions[3].choices[3];
//   answer = questions[3].answer;

//   console.log(answer);

//   modalBody.addEventListener("click", function(event) {
//     var element = event.target;

//     console.log(element.textContent);

//     if (element.matches("button") === true) {

//       if (element.textContent === answer) {
//         playerScore += sec;
//         score.textContent = `Score: ` + playerScore;

//       } else {
//         sec -= 15;
//       }
//     }
//   })

// }
// function question5() {

//   modalHeader.innerHTML = questions[4].title;
//   response1.textContent = questions[4].choices[0];
//   response2.textContent = questions[4].choices[1];
//   response3.textContent = questions[4].choices[2];
//   response4.textContent = questions[4].choices[3];
//   answer = questions[4].answer;

//   console.log(answer);

//   modalBody.addEventListener("click", function(event) {
//     var element = event.target;

//     console.log(element.textContent);

//     if (element.matches("button") === true) {

//       if (element.textContent === answer) {
//         playerScore += sec;
//         score.textContent = `Score: ` + playerScore;

//       } else {
//         sec -= 15;
//       }
//     }
//   })

// }





















