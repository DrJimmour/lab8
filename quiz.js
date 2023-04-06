$(document).ready(function(){

    // Global arrays for questions, answers and choices
    var questions = ["What's 2+2?", "What's 2x2?", "What's 2/2?", "What's 2-2?", "What's 2^2?"];
    var answers = ["4", "4", "1", "0", "4"];
    var choice_options = [["3", "4", "5", "We haven't studied that yet :("], ["4", "5", "7", "Cat"], ["5", "1", "-2", "3x^3 + const"], ["0", "16", "All of the above", "Not given"], ["One", "Two", "Three", "4"]];

    // Function to generate quiz questions dynamically
    function generateQuiz(){
        for(var i=0; i<questions.length; i++){
            var question = $('<div class="question">' + questions[i] + '</div>');
            var choices = $('<ul></ul>');
            for(var j=0; j<4; j++){
                var choice = $('<li><input type="radio" name="question' + i + '" value="' + choice_options[i][j] + '"> ' + choice_options[i][j] + '</li>');
                choices.append(choice);
            }
            $('#quiz-box').append(question);
            $('#quiz-box').append(choices);
        }
    }

    // Call the generateQuiz function to create the quiz
    generateQuiz();

    // Function to check the answers and display the score
    $("button").click(function(){
        var score = 0;
        for(var i=0; i<questions.length; i++){
            var selected = $('input[name="question' + i + '"]:checked').val();
            if(selected == answers[i]){
                score++;
            }
        }
        $('#scores').append('Your score: ' + score + '/' + questions.length);
    });

});
