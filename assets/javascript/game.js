$(document).ready(function () {

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
        d: "Tasha Yar"
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
  $(".message").text("Press Engage to Begin")
  $(".message").css("font-size", "20px")
  //this function dynamically creates the buttons, manages the scoring, and displays the correct answer if you guess wrong
  function button() {
    if (number !== 10) {
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
      $(".btn-answer").on("click", function () {
        var dataAnswer = ($(this).attr("data-answer"));

        if (questions[number].correctAnswer === dataAnswer) {
          wins++;
          clearInterval(timer);
          $("#display").empty();
          $(".questBtn").css("display", "none")
          $(".message").text("Great Job")
          setTimeout(function() {reset()}, 1500);
          console.log("ok!")

        } else {
          losses++;
          clearInterval(timer);
          $("#display").empty();
          $(".questBtn").css("display", "none")
          $(".message").css("font-size", "20px")
          $(".message").text("The correct answer is: "+ questions[number].correctAnswer)
          setTimeout(function() {reset()}, 1500);
          console.log("bummer!")  
        }

      });
    } else {
      gameOver()
    }
  }

  // the start button
  var startButton = $("<button>")
  startButton
    .addClass("btn btn-start")
    .text("ENGAGE")
    .attr("id", buttonId[4])
  $("#start").append(startButton);

  // when you click start the button goes away and the game begins. it fires button() at question[0] and the game starts 
  $(".btn-start").on("click", function (event) {
    event.preventDefault()
    $("#btn5").css("display", "none");
    $("#display").css("display", "block")
    $("#losses").text("Losses: " + losses);
    $("#wins").text("Wins: " + wins);
    $(".message").empty();
    button()
    clock = 31;
    runClock()
  });

/*this function gets called after the setTimeout happens, it resets the fields and displays a new question by 
raising the variable number by one, then it launches the button() and the next question appears */
  function reset() {
    $("#buttons").empty();
    $("#display").empty();
    $(".questBtn").css("display", "block")
    $(".message").empty();
    clearInterval(timer);
    number++;
    console.log(number);
    clock = 31;
    button()
    runClock()
  }
// this function runs when the game has ended, it displays your score and a message
  function gameOver() {
    $("#display").css("display", "none");
    $("#questions").css("display", "none")
    $("#losses").css("display", "block")
    $("#losses").text("Incorrect: " + losses);
    $("#wins").css("display", "block")
    $("#wins").text("Correct: " + wins);
    $(".questBtn").css("display", "none")
    $(".message").css("font-size", "27px")
    if (wins === 10) {
      $(".message").append("<h2>Congratulations, you've earned the rank of Admiral!</h2>")
    } else if (wins === 10) {
      $(".message").append("<h2>Congratulations, you've earned the rank of Captain</h2>")
    } else if (wins === 9) {
      $(".message").append("<h2>Congratulations, you've earned the rank of Lieutenant Commander</h2>")
    } else if (wins === 8) {
      $(".message").append("<h2>Congratulations, you've earned the rank of Lieutenant</h2>")
    } else if (wins === 7) {
      $(".message").append("<h2>You've earned the rank of Lieutenant Junior Grade</h2>")
    } else if (wins === 6) {
      $(".message").append("<h2>You've earned the rank of Ensign</h2>")
    } else if (wins === 5) {
      $(".message").append("<h2>You've earned the rank of Petty Officer</h2>")
    } else if (wins === 4) {
      $(".message").append("<h2>You've earned the rank of Wesley Crusher's babysitter</h2>")
    } else if (wins === 3) {
      $(".message").append("<h2>You've earned the rank of space janitor </h2>")
    } else if (wins === 2) {
      $(".message").append("<h2>You should go back to Daystrom Institute and study more</h2>")
    } else if (wins === 1) {
      $(".message").append("<h2>What happened? Did you teleport your brains out!?</h2>")
    } else  {
      $(".message").append("<h2>You should get assimilated</h2>")
    }
  }

  //timer stuff 
  var timer;
  var clock = 31;
  function countDown() {
    clock--;
    $("#display").html(clock);
    if (clock === 0) {
      $("#display").empty();
      $(".questBtn").css("display", "none")
      $(".message").css("font-size", "20px")
      $(".message").text("Click any slower and you'll get assimilated!")
      setTimeout(function() {reset()}, 1500);
    };
  };

  function runClock() {
    timer = setInterval(countDown, 1000);
  };





});
