var timeLeft = document.querySelector(".timer");
var startGame = document.getElementById("startbutton");
var answer1 = document.getElementById("button1");
var answer2 = document.getElementById("button2");
var answer3 = document.getElementById("button3");
var answer4 = document.getElementById("button4");




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
//display random question from array? or in a series, whichever is easier
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
// href to  high scores page