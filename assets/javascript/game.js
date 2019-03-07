$(document).ready(function() {
  /*
1. make a container that will hold trivia game
2. make a button that starts the game 
    -when you click the button the game will begin. 
    -a timer will start counting down and you'll have 30 seconds to answer a question 
3. create an array, or a collection  of questoins based on a theme 
4. create an array of possible answers to the question
    -one will prove true
    -three will prove false 
5. scoring
    -if you run out of time you lose: losses++, a new question is loaded and the timer begins again 
    -if you guess the wrong answer you lose: losses++, a new question is loaded and the timer begins again 
    -if you guess the right answer you win: wins++, a new question is loaded and the timer begins again

*/

  var questions = [
    {
      Question: "what is Whoopi Goldberg's character name aboard the ship?",

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
        "what instrument does Captain Picard play in the episoide The Inner Light?",

      Answers: {
        a: "Bass clarinet",
        b: "Ressikan flute",
        c: "Trombone",
        d: "Klingon Clarinet"
      },
      correctAnswer: "Ressikan flute"
    },
    {
      Question: "what is Data's evil twins name?",

      Answers: {
        a: "La Forge",
        b: "Chip",
        c: "Lore",
        d: "Byte"
      },
      correctAnswer: "Lore"
    },
    {
      Question: "who does Captain Picard refer to as #1?",

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
    }
  ]
  var wins = 0;
  var losses = 0;
  var counter = 30;
  var countDown = false;
  var number = 0; //variable stores the question number 

        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#questions").text(questions[number].Question);
    
    var questionButtonA = $("<button>");
        questionButtonA
            .addClass("btn btn-primary btn-answer")
            .text(questions[number].Answers.a)
            .attr("data-answer", questions[number].Answers.a);
        $("#buttons").append(questionButtonA);

        var questionButtonB = $("<button>");
        questionButtonB
            .addClass("btn btn-primary btn-answer")
            .text(questions[number].Answers.b)
            .attr("data-answer", questions[number].Answers.b);
        $("#buttons").append(questionButtonB);

        var questionButtonC = $("<button>");
        questionButtonC
            .addClass("btn btn-primary btn-answer")
            .text(questions[number].Answers.c)
            .attr("data-answer", questions[number].Answers.c);
        $("#buttons").append(questionButtonC);

        var questionButton4 = $("<button>");
        questionButton4
            .addClass("btn btn-primary btn-answer")
            .text(questions[number].Answers.d)
            .attr("data-answer", questions[number].Answers.d);
        $("#buttons").append(questionButton4);

        $(".btn-answer").on("click", function() {
        var dataAnswer = ($(this).attr("data-answer"));
        if (questions[number].correctAnswer === dataAnswer) {
                wins++
                console.log("ok!")
        } else {
                losses++      
        }
            number++
        console.log(wins);
        console.log(losses);
        console.log(number);
        console.log(dataAnswer);
        console.log(questions[number]);
    });

});