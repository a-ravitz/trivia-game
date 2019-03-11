$(document).ready(function() {

  var questions = [
    {
      Question: "What is Whoopi Goldberg's character name aboard the ship?",

      Answers: {
        a: "Guinan",
        b: "Worf",
        c: "Jean Luc",
        d: "Odo"
      },
      correctAnswer: "Guinan"
    },
    {
      Question:
        "What instrument does Captain Picard play in the episoide The Inner Light?",

      Answers: {
        a: "Bass clarinet",
        b: "Ressikan flute",
        c: "Trombone",
        d: "Klingon Clarinet"
      },
      correctAnswer: "Ressikan flute"
    },
    {
      Question: "What is Data's evil twins name?",

      Answers: {
        a: "La Forge",
        b: "Chip",
        c: "Lore",
        d: "Byte"
      },
      correctAnswer: "Lore"
    },
    {
      Question: "Who does Captain Picard refer to as #1?",

      Answers: {
        a: "Alexander Rozhenko",
        b: "William Riker",
        c: "Noonien Soong",
        d: "Geordi La Forge"
      },
      correctAnswer: "William Riker"
    },
    {
      Question: "Jean Luc is assimilated by which alien race?",

      Answers: {
        a: "Klingons",
        b: "Cardassians",
        c: "Ferengi",
        d: "Borg"
      },
      correctAnswer: "Borg"
    },
    {
      Question: "Who created the first warp drive system?",

      Answers: {
        a: "Zefram Cochrane",
        b: "Tasha Yar",
        c: "Lwaxana Troi",
        d: "Katherine Pulaski"
      },
      correctAnswer: "Zefram Cochrane"
    },  
    {
      Question: "In episode 63, Yesterday's Enterprise, who is the captain of the Enterprise C?",

      Answers: {
        a: "Benjamin Sisko",
        b: "Rachel Garrett",
        c: "James Kirk",
        d: "Tasha Yrr"
      },
      correctAnswer: "Rachel Garrett"
    },
    {
      Question: "Darmok and Jalad...",

      Answers: {
        a: "at Scoomada",
        b: "at Boobinga",
        c: "at Tanagra",
        d: "at Yumgiba"
      },
      correctAnswer: "at Tanagra"
    },
    {
      Question: "What kind of pet did Geordi LaForge have when he was 8 years old?",

      Answers: {
        a: "Tribble",
        b: "Circassian Cat",
        c: "Q",
        d: "Ferangi"
      },
      correctAnswer: "Circassian Cat"
    },
    {
      Question: "What was Beverly Crushers rank when she joined the crew?",

      Answers: {
        a: "Lieutenant",
        b: "Lieutenant Commander",
        c: "Commander",
        d: "Captain"
      },
      correctAnswer: "Commander"
    }
  ]
  var wins = 0;
  $("#wins").css("display", "none")
  var losses = 0;
  $("#losses").css("display", "none")
  var number = 0; //variable stores the question number 
  var answers = [];
  var buttonId = ["btn1", "btn2", "btn3", "btn4", "btn5"]
  $("#display").css("display", "none")
  var timeout = false; 

        function button() {

      answers = Object.values(questions[number].Answers);
        $("#questions").text(questions[number].Question);

            for (var i = 0; i < answers.length; i++) {

                var questionButton = $("<button>");
                    questionButton
                        .addClass("btn btn-answer")
                        .text(answers[i])
                        .attr("data-answer", answers[i])
                        .attr("id", buttonId[i]);
                    $("#buttons").append(questionButton);
                    console.log(answers[i]);
            }
                    $(".btn-answer").on("click", function() {
                      var dataAnswer = ($(this).attr("data-answer"));
                      
                    if (number !== 9) {
                      if (questions[number].correctAnswer === dataAnswer) {
                              clearInterval(timer);
                              resetWin();
                              console.log("ok!")

                      } else  {
                              clearInterval(timer);
                              resetLose();
                              console.log("bummer!")
                      }
                    } else {
                      gameOver()
                      $("#buttons").empty();
                    }  

            });
          
        }
            var startButton = $("<button>")
            startButton 
                .addClass("btn btn-start")
                .text("ENGAGE")
                .attr("id", buttonId[4])
                $("#start").append(startButton);

            $(".btn-start").on("click", function(event) {
              event.preventDefault()
              $("#btn5").css("display", "none");
              $("#display").css("display", "block")
              $("#losses").text("Losses: " + losses);
              $("#wins").text("Wins: " + wins);
              button()
              clock = 31;
              runClock()
            }); 
            

        function gameOver () {
          $("#display").css("display", "none");
          $("#questions").css("display", "none")
          $("#losses").css("display", "block")
          $("#losses").text("Incorrect: " + losses);
          $("#wins").css("display", "block")
          $("#wins").text("Correct: " + wins);
          $(".questBtn").css("display","none")
        }

        function resetWin () {
            $("#buttons").empty();
            $("#display").empty();
            clearInterval(timer);
            wins++;
            number++;
            console.log(number);
            clock = 31;
            button()
            runClock()
        }
        
        function resetLose () {
            $("#buttons").empty();
            $("#display").empty();
            clearInterval(timer);
            losses++
            number++;
            console.log(number);
            clock = 31;
            button()
            runClock()
        }
      
            var timer;
            var clock = 31;
        function countDown() {
                clock--;
                $("#display").html(clock);
                if (clock === 0) {
                    clearInterval(timer);
                    resetLose();
                };
        };

        function runClock() {
            timer = setInterval(countDown, 1000);
        }; 
        

        


});

/*g 

one function called buttons. this function will generate the buttons, 
append the question to the dom and be reloaded with a new question each time 
the round ends

one function called start. this will hold the onclick event for starting the game,
begin the count down timer and take care of the scoring

one function called reset. this will be called at the end of each round, 
it will raise the var number by 1, which will trigger a new question and set of answers, 
it will push score information to the DOM, and restart the timer */