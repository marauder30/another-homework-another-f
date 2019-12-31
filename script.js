

var startButton = document.getElementById("startbutton");
var timeRemaining = document.querySelector(".timer");
var highScores = document.querySelector(".highscores");
var modal = document.querySelector("staticBackdrop");
var modalHeader = document.getElementById("staticBackdropLabel");
var modalBody = document.getElementById("staticBackdropBody");
var score;
var time;



function setTimer() {
    var sec = 75;
    setInterval(function() {
      document.getElementById("timer").innerHTML = sec;
      sec--;
      if (sec == 00) {
        var userID = prompt("Time's up! Your score: " + score + "   Please enter your initials!");

        var player = {
            name: userID,
            score: score
        }

        window.localStorage.setItem('user', JSON.stringify(player));

        console.log(player);

        document.getElementById("timer").innerHTML = 0;

        location.href = "highscores.html";


      }
    }, 1000);
}

    

// event listener for startButton pops modal and begins quiz, sets timer to 75 and counts down

startButton.addEventListener("click", function(event) {

    event.preventDefault();
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









