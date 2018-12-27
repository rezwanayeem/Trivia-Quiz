// Variable that will hold the setInterval
var card = $("#quiz-area");
var timer;

//click events for the quiz
// click to start then display quesions
$(document).on("click", "#start", function () {
    quiz.start();
});

// click to start then display result while done
$(document).on("click", "#done", function () {
    quiz.done();
});

// Question set
var questions = [{
    question: "Which mammal first reached Earth's orbit alive?",
    answers: ["Monkey", "Cat", "Human", "Dog"],
    correctAnswer: "Dog"
}, {
    question: "What is the largest planet in our Solar System?",
    answers: ["Saturn", "Pluto", "Jupiter", "Earth"],
    correctAnswer: "Jupiter"
}, {
    question: "How many blue stripes does the United States of America national flag have?",
    answers: ["6", "7", "0", "13"],
    correctAnswer: "0",
}, {
    question: "What is the largest country, by area, that has only one time zone?",
    answers: ["Russia", "China", "Turkey", "Australia"],
    correctAnswer: "China",
}, {
    question: "What temperature is the same in Celsius and Fahrenheit?",
    answers: ["+100 degree", "+40 degree", "0 degree", "-40 degree"],
    correctAnswer: "-40 degree",
}];


var quiz = {
    // properties of quiz
    correct: 0,
    incorrect: 0,
    counter: 60,

    //function for countdown timer
    countdown: function () {
        quiz.counter--;
        $("#counter-number").html(quiz.counter);
        if (quiz.counter === 0) {
            quiz.done();
        }
    },
    // function for displaying questions including timer
    start: function () {
        timer = setInterval(quiz.countdown, 1000);

        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>");
        //remove below elemnts 
        $("#start").remove();
        $("#play").remove();

        // loops through answers for each radio button
        for (var i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }
        // done button added
        card.append("<button id='done'>Done</button>");
    },
    //done button started to display result
    done: function () {
        // loop through correctArray & radioName to match html 
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questions[1].correctAnswer) {
                quiz.correct++;
            }
            else {
                quiz.incorrect++;
            }
        });

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === questions[2].correctAnswer) {
                quiz.correct++;
            }
            else {
                quiz.incorrect++;
            }
        });

        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() === questions[3].correctAnswer) {
                quiz.correct++;
            }
            else {
                quiz.incorrect++;
            }
        });

        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() === questions[4].correctAnswer) {
                quiz.correct++;
            }
            else {
                quiz.incorrect++;
            }
        });

        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() === questions[5].correctAnswer) {
                quiz.correct++;
            }
            else {
                quiz.incorrect++;
            }
        });
    
        this.result();

    },

    result: function () {

        clearInterval(timer);
        // display result of the quiz
        $("#sub-wrapper h2").remove();
        $("#play").remove();
        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};

