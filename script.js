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
var score;
var time;

init();



// init function to set timer to 0

function init() {
    timeRemaining.textContent = 0;
}


// function for timeRemaining/increments

// function setTimer () {
// setInterval(function() {
//     var sec = 75;
//     sec--;
//     document.getElementById("timer").innerHTML = sec;
//     if (sec === 0) {
//       alert("Time's up!");
//       document.getElementById("timer").innerHTML = 0;
//       stopTimer();
//     }      
      
// }, 1000);

// }


// function stopTimer() {
//    clearInterval();
// }


function setTimer() {
    var sec = 75;
    setInterval(function() {
      document.getElementById("timer").innerHTML = sec;
      sec--;
      if (sec == 00) {
        alert("Time's up!");
        document.getElementById("timer").innerHTML = 0;
        location.href = "highscores.html";
      }
    }, 1000);
}

    

// event listener for startButton pops modal and begins quiz, sets timer to 75 and counts down

startButton.addEventListener("click", function() {

    renderQuestion1();
    setTimer();

    
    
}); 

//function to cycle through questions and publish the question and answer buttons to the modal
//innerHTML and empty() to clear fields 

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

            if (element.textContent === "alerts") {

                console.log("success!");
            } else {
                console.log("wrong!!");
            }

            renderQuestion2();

            function renderQuestion2() {
            
                modalHeader.innerHTML = "";
                modalBody.innerHTML = "";
                modalHeader.innerHTML = questions[1].title;
            
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
            
                answer1.textContent = questions[1].choices[0];
                answer2.textContent = questions[1].choices[1];
                answer3.textContent = questions[1].choices[2];
                answer4.textContent = questions[1].choices[3];
            
                modalBody.addEventListener("click", function(event) {
                    var element1 = event.target;
            
                    if (element1.matches("button") === true) {
            
                        if (element1.textContent === "2") {
            
                            console.log("success!");
                        } else {
                            console.log("wrong!!");
                        }

                        renderQuestion3();
                        
                        function renderQuestion3() {
                        
                            modalHeader.innerHTML = "";
                            modalBody.innerHTML = "";
                            modalHeader.innerHTML = questions[2].title;
                        
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
                        
                            answer1.textContent = questions[2].choices[0];
                            answer2.textContent = questions[2].choices[1];
                            answer3.textContent = questions[2].choices[2];
                            answer4.textContent = questions[2].choices[3];
                        
                            modalBody.addEventListener("click", function(event) {
                                var element2 = event.target;
                        
                                if (element2.matches("button") === true) {
                        
                                    if (element2.textContent === "alerts") {
                        
                                        console.log("success!");
                                    } else {
                                        console.log("wrong!!");
                                    }

                                    renderQuestion4();
                        
                                    function renderQuestion4() {
                                    
                                        modalHeader.innerHTML = "";
                                        modalBody.innerHTML = "";
                                        modalHeader.innerHTML = questions[3].title;
                                    
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
                                    
                                        answer1.textContent = questions[3].choices[0];
                                        answer2.textContent = questions[3].choices[1];
                                        answer3.textContent = questions[3].choices[2];
                                        answer4.textContent = questions[3].choices[3];
                                    
                                        modalBody.addEventListener("click", function(event) {
                                            var element3 = event.target;
                                    
                                            if (element3.matches("button") === true) {
                                    
                                                if (element3.textContent === "alerts") {
                                    
                                                    console.log("success!");
                                                } else {
                                                    console.log("wrong!!");
                                                }

                                                renderQuestion5();
                                    
                                                function renderQuestion5() {
                                                
                                                    modalHeader.innerHTML = "";
                                                    modalBody.innerHTML = "";
                                                    modalHeader.innerHTML = questions[4].title;
                                                
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
                                                
                                                    answer1.textContent = questions[4].choices[0];
                                                    answer2.textContent = questions[4].choices[1];
                                                    answer3.textContent = questions[4].choices[2];
                                                    answer4.textContent = questions[4].choices[3];
                                                
                                                    modalBody.addEventListener("click", function(event) {
                                                        var element4 = event.target;
                                                
                                                        if (element4.matches("button") === true) {
                                                
                                                            if (element4.textContent === "alerts") {
                                                
                                                                console.log("success!");
                                                            } else {
                                                                console.log("wrong!!");
                                                            }

                                                            return;
                                                
                                                            // renderHighScores 
                                                
                                                        }
                                                    })
                                                }
                                    
                                            }
                                        })
                                    }
                        
                                }
                            })
                        }
            
                    }
                })
            }

        }
    })
}









