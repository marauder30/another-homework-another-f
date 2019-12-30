// var container = document.querySelector(".questionForm");
// var timeLeft = document.querySelector(".timer");
// var startGame = document.getElementById("startbutton");
// var answer1 = document.getElementById("button1");
// var answer2 = document.getElementById("button2");
// var answer3 = document.getElementById("button3");
// var answer4 = document.getElementById("button4");
// var answerButton = document.querySelectorAll(".btn-outline-dark");
// var score = 0;
// var timer = 0;
// var highScore = document.querySelector(".highscores");
// var questionArray = questions;



// beginGame();

// function beginGame() {
//     timer = 75;
//     timeLeft = 75;
//     console.log(timeLeft);
// }


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


//         modal to collect name and score to new variable in localStorage

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



var startButton = document.getElementById("startbutton");
var timeRemaining = document.querySelector(".timer");
var highScores = document.querySelector(".highscores");
var modal = document.querySelector("staticBackdrop");
var modalHeader = document.getElementById("staticBackdropLabel");
var modalBody = document.getElementById("staticBackdropBody");

init();



// init function to set timer to 0

function init() {
    timeRemaining.textContent = 0;
}


// function for timeRemaining/increments

function Decrement() {
    if (document.getElementById) {
        seconds = document.getElementById("timer");



        if (seconds === 0) {
            alert("Time's up!")
        } else {
            seconds--;
            setTimeout('Decrement()', 1000);
        }
    }
}

function countdown() { 
    timeRemaining = 75;
    timeRemaining.val = 75;
    console.log(timeRemaining);
    setTimeout('Decrement()', 75); 
} 
    

// event listener for startButton pops modal and begins quiz, sets timer to 75 and counts down

startButton.addEventListener("click", function() {

    renderQuestion1();
    Decrement();
    countdown();
    
    
}); 

// function to cycle through questions and publish the question and answer buttons to the modal
// innerHTML and empty() to clear fields 

function renderQuestion1() {

    modalHeader.innerHTML = questions[0].title;

    var answer1 = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");

    modalBody.appendChild(answer1);
    answer1.setAttribute("class", "btn btn-secondary btn-lg btn-block");
    modalBody.appendChild(answer2);
    answer2.setAttribute("class", "btn btn-secondary btn-lg btn-block");
    modalBody.appendChild(answer3);
    answer3.setAttribute("class", "btn btn-secondary btn-lg btn-block");
    modalBody.appendChild(answer4);
    answer4.setAttribute("class", "btn btn-secondary btn-lg btn-block");

    answer1.textContent = questions[0].choices[0];
    answer2.textContent = questions[0].choices[1];
    answer3.textContent = questions[0].choices[2];
    answer4.textContent = questions[0].choices[3];

    modalBody.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches("button") === true) {

            console.log(element);
            console.log(element.textContent);

            if (element.textContent === "alerts") {

                console.log("success!");
            } else {
                console.log("wrong!!");
            }

            renderQuestion2();

        }
    })

}





// event listener for modal/ check if buttons



// calculate score based on time remaining if answered correctly 
// else remove time from the clock if answered incorrectly




// when time runs out or no questions remain, clear interval, hide the answer boxes 

// publish the user score and add a text field to the modal for the user to enter their initials

// store initials and score in localStorage









