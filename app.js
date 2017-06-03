'use strict';

///For writing out the answers to the test
var answerCorrect = '<strong><img src="assets/checkmark.png" />Correct</strong>';
var answerWrong = '<strong><img src="assets/wrong.png" />Incorrect</strong>'
var answersCount = 0; ///Number of correct answers
var randomNumber = Math.floor(Math.random()*50)+1;
var numberTry = 1;
console.log(randomNumber);

///Get ID so that quiz answers can be displayed there
var quizAnswers = document.getElementById('quiz-answers');
var quizAnswersNumber = document.getElementById('quiz-count');

///array: 0Question number, 1question, 2answer, 3answer, 4correct console log, 5incorrect console log
var yesNoQuestions =[
  ['Question 1 ','What movie is Raegan\'s name from?', 'THE EXORCIST', 'EXORCIST', 'You are correct!', 'Wow, that is so wrong'],
  ['Question 2 ','Does Raegan have a fluffy little kitty cat?', 'NO', 'N', 'You are correct!', 'Sorry, that\'s wrong, there are no cats'],
  ['Question 3 ', 'Does Raegan play video games?', 'YES', 'Y', 'ALL THE VIDEO GAMES', 'She might like video games too much...'],
  ['Question 4 ', 'Does Raegan doodle?', 'YES', 'Y', 'anime-style mostly.', 'She has notebooks full of doodles.'],
  ['Question 5 ', 'Does Raegan like toast?', 'YES', 'Y', 'Mmmm toast', 'I guess it is just hard bread...'],
  ['Question 6 ', 'Guess my secret number between 1 and 50', randomNumber, randomNumber, 'You guessed the correct number! You must be psychic!','Sorry, that\'s not it']
];

///Begining of test
var name = prompt('Welcome Citizen. What is your Designation?');
console.log('Username: '+ name);

///Trying to put user name into page
var welcomeMessage = document.getElementById('welcome-message');
welcomeMessage.innerHTML = 'Welcome '+ name;

///alert('Excellent job, '+ name + ', your typing skills are superb!');

var testReady = confirm('Are you ready for your calibration test?');

if(testReady){
  alert('Your enthusiasm is appreciated. Let us begin.');
} else{
  alert('I\'m sorry, ' + name + ', calibration is necessary. Let us begin.');
}

///Array for answers
var questionAnswers = new Array();

///For loop to ask all the yes/no questions
for(var i = 0; i < yesNoQuestions.length; i++) {
  if(yesNoQuestions[i]!= yesNoQuestions[5]){
  questionAnswers[i] = prompt(yesNoQuestions[i][1]);
  console.log(questionAnswers);
}
  quizAnswers.innerHTML += '<p>' + yesNoQuestions[i][0] + yesNoQuestions[i][1] + '<br />You answered: ' + questionAnswers[i];

  if(yesNoQuestions[i][0] === 'Question 6 ') {
    while(numberTry < 5) {
      var randomNumberAnswer = prompt(yesNoQuestions[5][1]);
      console.log('in do while loop');
      randomNumberAnswer = parseInt(randomNumberAnswer);
        if(randomNumberAnswer === randomNumber) {
          console.log(randomNumberAnswer + ' is correct!');
          alert('Wow you got it right in ' + numberTry + ' tries!')
          break;
        } else if (randomNumberAnswer < randomNumber){
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
      }
  }
  else if(questionAnswers[i].toUpperCase() === yesNoQuestions[i][2] || questionAnswers[i].toUpperCase() === yesNoQuestions[i][3]){
    answersCount++;
    alert(yesNoQuestions[i][0] + ' is correct.');
    console.log(yesNoQuestions[i][4]);
    quizAnswers.innerHTML += answerCorrect + '</p>'

    } else {
    console.log(yesNoQuestions[i][5]);
    alert('Good guess!')
    quizAnswers.innerHTML += answerWrong + '</p>'
  }
}



quizAnswersNumber.innerHTML = answersCount + ' out of ' + yesNoQuestions.length + ' questions';
/*
///Question 1
var questionMovieAnswer;
var questionMovie = prompt(yesNoQuestions[0][1]);
if(questionMovie.toUpperCase() === yesNoQuestions[0][2] || questionMovie.toUpperCase() === yesNoQuestions[0][3]){
  console.log(questionMovie + ' is correct');
  questionMovieAnswer = answerCorrect;
  alert('You are correct!')
} else {
  console.log('Wow,' + questionMovie + ' is so wrong.');
  questionMovieAnswer = answerWrong;
  alert(questionMovie + ' is an excellent answer!');
}

///Question 2
var questionCatAnswer;
var questionCat = prompt(yesNoQuestions[1][1]);
if(questionCat.toUpperCase() === yesNoQuestions[1][2] || questionCat.toUpperCase() === yesNoQuestions[1][3]) {
  console.log('No cats');
  questionCatAnswer = answerCorrect;
  alert('You are correct!');
} else {
  console.log('The test is lying, I don\'t have a cat.');
  questionCatAnswer = answerWrong;
  alert('That was a good guess!');
}

///Question 3
var questionGamesAnswer;
var questionGames = prompt(yesNoQuestions[2][1]);
if(questionGames.toUpperCase() ===yesNoQuestions[2][2] || questionGames.toUpperCase() === yesNoQuestions[2][3]) {
  console.log('Lots of video games');
  questionGamesAnswer = answerCorrect;
  alert('You are correct!');
} else {
  console.log('NOPE! ALL THE VIDEO GAMES!');
  questionGamesAnswer = answerWrong;
  alert('You were almost right. Excellent job!');
}

///Question 4
var questionArtAnswer;
var questionArt = prompt(yesNoQuestions[3][1]);
if(questionArt.toUpperCase()===yesNoQuestions[3][2] || questionArt.toUpperCase() === yesNoQuestions[3][3]) {
  console.log('She doodles a lot!');
  questionArtAnswer = answerCorrect;
  alert('You are correct!');
} else {
  console.log('The test is lying, I love doodling');
  alert('She has never picked up a pencil! Good job!');
  questionArtAnswer = answerWrong;
}

///Question 5
var questionTacoAnswer;
var questionTaco = prompt(yesNoQuestions[4][1]);
if(questionTaco.toUpperCase()=== yesNoQuestions[4][2] || questionTaco.toUpperCase() === yesNoQuestions[4][3]) {
  console.log('She love toast!');
  questionTacoAnswer = answerCorrect;
  alert('You are correct!');
} else {
  console.log('I guess I don\'t feel strongly about toast');
  questionTacoAnswer = answerWrong;
  alert('It is only food.');
}
*/

///Write out quiz answers
/*
quizAnswers.innerHTML = '<p>' + yesNoQuestions[0][0] + yesNoQuestions[0][1] + '<br />You answered: ' + questionMovie + ' '+ questionMovieAnswer +'</p>' +
'<p>' + yesNoQuestions[1][0] + yesNoQuestions[1][1] + '<br />You answered: '+ questionCat + ' ' + questionCatAnswer +'</p>'
+ '<p>' + yesNoQuestions[2][0] + yesNoQuestions[2][1] + '<br />You answered: ' + questionGames + ' ' + questionGamesAnswer + '</p>'
+ '<p>' + yesNoQuestions[3][0] + yesNoQuestions[3][1] + '<br />You answered: ' + questionArt + ' ' + questionArtAnswer+ '</p>'
+ '<p>' + yesNoQuestions[4][0] + yesNoQuestions[4][1] + '<br />You answered: '+ questionTaco +' '+ questionTacoAnswer +'</p>'
*/
