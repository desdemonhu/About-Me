'use strict';

///For writing out the answers to the test
var answerCorrect = '<strong><img src="assets/checkmark.png" />Correct</strong>';
var answerWrong = '<strong><img src="assets/wrong.png" />Incorrect</strong>'

var yesNoQuestions =[
  ['Question 1: ','What movie is Raegan\'s name from?', 'THE EXORCIST', 'EXORCIST' ],
  ['Question 2: ','Does Raegan have a fluffy little kitty cat?', 'NO', 'N'],
  ['Question 3: ', 'Does Raegan play video games?', 'YES', 'Y'],
  ['Question 4: ', 'Does Raegan doodle?', 'YES', 'Y'],
  ['Question 5: ', 'Does Raegan like toast?', 'YES', 'Y']
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

///Write out quiz answers
var quizAnswers = document.getElementById('quiz-answers');
quizAnswers.innerHTML = '<p>' + yesNoQuestions[0][0] + yesNoQuestions[0][1] + '<br />You answered: ' + questionMovie + ' '+ questionMovieAnswer +'</p>' +
'<p>' + yesNoQuestions[1][0] + yesNoQuestions[1][1] + '<br />You answered: '+ questionCat + ' ' + questionCatAnswer +'</p>'
+ '<p>' + yesNoQuestions[2][0] + yesNoQuestions[2][1] + '<br />You answered: ' + questionGames + ' ' + questionGamesAnswer + '</p>'
+ '<p>' + yesNoQuestions[3][0] + yesNoQuestions[3][1] + '<br />You answered: ' + questionArt + ' ' + questionArtAnswer+ '</p>'
+ '<p>' + yesNoQuestions[4][0] + yesNoQuestions[4][1] + '<br />You answered: '+ questionTaco +' '+ questionTacoAnswer +'</p>'
