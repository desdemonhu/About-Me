'use strict';

///For writing out the answers to the test
var answerCorrect = '<strong><img src="assets/checkmark.png" />Correct</strong>';
var answerWrong = '<strong><img src="assets/wrong.png" />Incorrect</strong>';
var answersCount = 0; ///Number of correct answers
var randomNumber = Math.floor(Math.random() * 50) + 1;
var numberTry = 1;
var numberTryQuestionSeven = 1;
console.log(randomNumber);

///Get ID so that quiz answers can be displayed there
var quizAnswers = document.getElementById('quiz-answers');
var quizAnswersNumber = document.getElementById('quiz-count');

///array: 0Question number, 1question, 2answer, 3answer, 4correct console log, 5incorrect console log
var questionSeven = ['teenage mutant ninja turtles', 'transformers', 'he-man','she-ra', 'the smurfs'];
var yesNoQuestions = [
  ['Question 1 ','What movie is Raegan\'s name from?', 'THE EXORCIST', 'EXORCIST', 'You are correct!', 'Wow, that is so wrong'],
  ['Question 2 ','Does Raegan have a fluffy little kitty cat?', 'NO', 'N', 'You are correct!', 'Sorry, that\'s wrong, there are no cats'],
  ['Question 3 ', 'Does Raegan play video games?', 'YES', 'Y', 'ALL THE VIDEO GAMES', 'She might like video games too much...'],
  ['Question 4 ', 'Does Raegan doodle?', 'YES', 'Y', 'anime-style mostly.', 'She has notebooks full of doodles.'],
  ['Question 5 ', 'Does Raegan like toast?', 'YES', 'Y', 'Mmmm toast', 'I guess it is just hard bread...'],
  ['Question 6 ', 'Guess my secret number between 1 and 50', randomNumber, randomNumber, 'You guessed the correct number! You must be psychic!','Sorry, that\'s not it'],
  ['Question 7 ', 'Guess one of Raegan\'s favorite cartoons growing up', questionSeven, questionSeven, 'You guessed the right answer!', 'Sorry, that is wrong.']
];

///Begining of test
var name = prompt('Welcome Citizen. What is your Designation?');
console.log('Username: ' + name);

///Trying to put user name into page
var welcomeMessage = document.getElementById('welcome-message');
welcomeMessage.innerHTML = 'Welcome ' + name;

///alert('Excellent job, '+ name + ', your typing skills are superb!');

var testReady = confirm('Are you ready for your calibration test?');

if(testReady){
  alert('Your enthusiasm is appreciated. Let us begin.');
} else{
  alert('I\'m sorry, ' + name + ', calibration is necessary. Let us begin.');
}

///Array for answers
var questionAnswers = new Array();

function askQuestions() {
///For loop to ask all the yes/no questions
  for(var i  =  0; i < yesNoQuestions.length; i++) {
    if(yesNoQuestions[i] != yesNoQuestions[5] && yesNoQuestions[i] != yesNoQuestions[6]){
      questionAnswers[i] = prompt(yesNoQuestions[i][1]);
      console.log(questionAnswers);
      if(questionAnswers[i].toUpperCase() === yesNoQuestions[i][2] || questionAnswers[i].toUpperCase() === yesNoQuestions[i][3]){
        answersCount++;
        alert(yesNoQuestions[i][0] + ' is correct.');
        console.log(yesNoQuestions[i][4]);
        printAnswers(i,answerCorrect);
      } else {
        console.log(yesNoQuestions[i][5]);
        alert('Good guess!');
        printAnswers(i,answerWrong);
      }
    }
    ///Question 6
    if(yesNoQuestions[i][0] === 'Question 6 ') {
      while(numberTry < 5) {
        var randomNumberAnswer = prompt(yesNoQuestions[5][1]);
        randomNumberAnswer = parseInt(randomNumberAnswer);
        if(randomNumberAnswer === randomNumber) {
          console.log(randomNumberAnswer + ' is correct!');
          alert('Wow you got it right in ' + numberTry + ' tries!');
          document.getElementById('quiz-answers-5').innerHTML = '<blockquote>' + yesNoQuestions[5][0] + '<br />' + yesNoQuestions[5][1] + '<br />' + answerCorrect + '</blockquote>';
          answersCount++;
          //printAnswers(i,answerCorrect);
          break;
        } else if (randomNumberAnswer < randomNumber) {
          console.log(randomNumberAnswer + ' is wrong');
          alert('Sorry, that was too low, please try again!');
          numberTry++;
        } else if(randomNumberAnswer > randomNumber){
          console.log(randomNumberAnswer + ' is wrong');
          alert('Sorry, that was too high, please try again!');
          numberTry++;
        }else {
          alert('That is not a number, please try again');
        }
        if(numberTry === 5 && randomNumberAnswer != randomNumber) {
          alert('Sorry you are out of guesses.');
          document.getElementById('quiz-answers-5').innerHTML = '<blockquote>' + yesNoQuestions[5][0] + '<br />' + yesNoQuestions[5][1] + '<br />' + answerWrong + '</blockquote>';
          //printAnswers(i,answerWrong);
        }
      }
    }
    ///Question 7
    if (yesNoQuestions[i][0] === 'Question 7 ') {
      while(numberTryQuestionSeven < 7){
        var questionSevenAnswer = prompt(yesNoQuestions[6][1]).toLowerCase();
        ///Get index of answer in array
        var indexOf = questionSeven.indexOf(questionSevenAnswer);
        if(indexOf > -1){
          alert('You guessed correctly!');
          document.getElementById('quiz-answers-6').innerHTML = '<blockquote>' + yesNoQuestions[6][0] + '<br />' + yesNoQuestions[6][1] + '<br />' + answerCorrect + '</blockquote>';
          answersCount++;
          //printAnswers(i, answerCorrect);
          break;
        }else{
          alert('Wrong. You have ' + (6 - numberTryQuestionSeven) + ' tries left.');
        }
        numberTryQuestionSeven++;
        if(numberTryQuestionSeven === 7){
          alert('Sorry, you are out of tries.');
          document.getElementById('quiz-answers-6').innerHTML = '<blockquote>' + yesNoQuestions[6][0] + '<br />' + yesNoQuestions[6][1] + '<br />' + answerWrong + '</blockquote>';
          //printAnswers(i,answerWrong);
        }
      }
    }

  }
  console.log(answersCount);
} ///END OF FUNCTION askQuestions

///Prints an answer to html for questions 1-5
function printAnswers(i, answerCheck){
  document.getElementById('quiz-answers-' + i).innerHTML = '<blockquote>' + yesNoQuestions[i][0] + '<br />' + yesNoQuestions[i][1] + '<br />You answered: ' + questionAnswers[i] + '<br />' + answerCheck + '</blockquote>';
}

askQuestions();
console.log(quizAnswersNumber);
quizAnswersNumber.innerHTML = '<p>You got ' + answersCount + ' out of ' + yesNoQuestions.length + ' questions right, ' + name + '!</p>';
