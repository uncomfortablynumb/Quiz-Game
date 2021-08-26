// 7. Suppose this code would be a plugin for other programmers to use in their code. make sure your code is private and do not interfere with other programmers' code

(function () {
  // 1. Function constructor: Question
  var Question = function(question, answerSet, answerNumber) {
    this.question = question;
    this.answerSet = answerSet;
    this.answerNumber = answerNumber;
  };

  // 2. Create 3 questions using the constructor:
  // * use new keyword!!!!
  var question1 = new Question('What is 1+1?', ['1','2','3'], 2);
  var question2 = new Question('Which programming language are we learning?', ['Java','Python','Javascript'], 3);
  var question3 = new Question('Is programming hard?', ['Yes','No'], 1);
  2

  // 3. Store questions in an array
  var questionSet = [question1,question2,question3];


  // closures
  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = score();



  // 4. Select one random question and log it on the console, print possible answers with each an indication number (use method)
  Question.prototype.printQuestions = function()
   {
    // question
    console.log(this.question);
    
    // answerSet
    for(var i=0; i<this.answerSet.length; i++) {
      console.log('(' + (i+1) + ') ' + this.answerSet[i]);
    }
    
  }

  // 5. Use 'prompt' function to ask for an answer

  // 6. Check if the answer is correct (use method)
  Question.prototype.isCorrect = function(answerPlayer,callback) {
    var sc;

    if (answerPlayer === this.answerNumber) {
      // score += 1;
      console.log('Your answer is (' + answerPlayer + '). You are right!');
      sc = callback(true);
      // console.log('Your score is ' + score + '.');
      // restart();
    } else {
      console.log('Your answer is (' + answerPlayer + '). You are wrong!');
      sc = callback(false);
      // console.log('Your score is ' + score + '.');
      // restart();
    }
    console.log('Your score is ' + sc + '.');
  };

  // 8. After displaying the result, restart it (write a function and call it right afterwards)

  function nextQuestion() {
    var randomNumber = Math.floor(Math.random() * questionSet.length);
    var randomQuestion = questionSet[randomNumber];
    randomQuestion.printQuestions();
    var answerPlayer = prompt('Please input your answer. Type \'exit\' to end the game');

    // if the answer is not 'exit', then we can judge if it's right or wrong
    if (answerPlayer === 'exit') {
      console.log('Game ends');
    } else {
      randomQuestion.isCorrect(parseInt(answerPlayer),keepScore);
      nextQuestion();
    }
  }
  nextQuestion();



  // function restart() {
  //   console.log('------------');
  //   randomNumber = Math.floor(Math.random() * 3);
  //   randomQuestion = questionSet[randomNumber];
  //   randomQuestion.printQuestions();
  //   answerPlayer = prompt('Please input your answer');
  //   randomQuestion.isCorrect();
  // }

  // 9. Writes 'exit' to quit
  // FINISHED

  // 10. Track the user's score (the lecturer will use CLOSURE, but I don't need to)
  // FINISHED

  // 11. Display the score in the console (use method)
  // FINISHED feature, but didn't use any method


})();




