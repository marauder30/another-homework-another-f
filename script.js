var container = document.querySelector(".questionForm");
var timeLeft = document.querySelector(".timer");
var startGame = document.getElementById("startbutton");
var answer1 = document.getElementById("button1");
var answer2 = document.getElementById("button2");
var answer3 = document.getElementById("button3");
var answer4 = document.getElementById("button4");
var answerButton = document.querySelectorAll(".btn-outline-dark");
var score = 0;
var timer = 0;
var highScore = document.querySelector(".highscores");
var questionArray = questions;


var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
        title: "How many ampersands are used to denote an 'and' statement?",
        choices: ["0", "1", "2", "3"],
        answer: "2"
      },
      {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      ];


beginGame();

function beginGame() {
    timer = 75;
    timeLeft = 75;
    console.log(timeLeft);
}


//addeventlistener to container, delegate events to buttons
// container.addeventlistener("click", function(event) {
//    
// if (event.target.matches("button")) {
//    var index = event.target.parentElement.getAttribute("data-index");
// }
//})
//
//
//
//

// var gameTimer = setInterval(function() {
//     timer--;
//     lifeLeft.textContent = timer;
//     if (timer <= 0)
//     clearInterval(gameTimer);
// },1000);


//     event.preventDefault;
//     timer = secondsLeft;
//     console.log("anything")
//     document.appendChild(questions[i]);
    
    
//     console.log(questions[i]);
    
//         timer = 75;
        

//         document.querySelector(".timer").innerHTML = seconds;

    


//     for (var i =0; i < questions.length; i++) {

    





//     if (secondsLeft === 0) {
//         clearInterval(timerInterval);           
//         //modal to collect name and score to new variable in localStorage
//         location  = "highscores.html";
//   };

// }


// 
// 


//variable for start button 
//variable for high score / page

//load opening page (index.html) 
//set/reset timer to 0
//display start button
//link to high scores


//gonna need a variable to point to the question object/arrays
//click listener on start button begins question array
//set timer to 75
//begin counting down from 75 in increments of one second
//display random question from array? or in a series, whichever is easier tbh
//question should also randomly display possible answers from array, 1 of which is correct

//click event on each of 4 answer buttons
// IF a question is answered correctly, add to the players score
//    refresh page? 
//    move on to the next question 
// ELSE IF
//    a question is answered incorrectly, remove 10 seconds
//    next question

// when timer reaches zero, clear interval? to end game
// modal box to collect name and score in local storage
// store high scores in existing or new variable 
// use the sort function to list in order of highest score to lowest
