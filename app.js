'use strict';

///For writing out the answers to the test
var answerCorrect = '<strong><img src="assets/checkmark.png" />Correct</strong>';
var answerWrong = '<strong><img src="assets/wrong.png" />Incorrect</strong>'

///Begining of test
var name = prompt('Welcome Citizen. What is your Designation?');
console.log('Username: '+ name);

///Trying to put user name into page
var welcomeMessage = document.getElementById('welcome-message');
welcomeMessage.innerHTML = 'Welcome '+ name;


alert('Excellent job, '+ name + ', your typing skills are superb!');

var testReady = confirm('Are you ready for your calibration test?');

if(testReady){
  alert('Your enthusiasm is appreciated. Let us begin.');
} else{
  alert('I\'m sorry, ' + name + ', calibration is necessary. Let us begin.');
}

///Question 1
var questionMovieAnswer;
var questionMovie = prompt('What movie is Raegan\'s name from?');
if(questionMovie.toUpperCase() === "THE EXORCIST" || questionMovie.toUpperCase() === "EXORCIST"){
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
var questionCat = prompt('Does Raegan have a fluffy little kitty cat? Y/N');
if(questionCat.toUpperCase() === 'Y' || questionCat.toUpperCase() === 'YES') {
  console.log('The test is lying, I don\'t have a cat.');
  questionCatAnswer = answerWrong;
  alert('That was a good guess!');
} else if (questionCat.toUpperCase() === 'N' || questionCat.toUpperCase() === 'NO') {
  console.log('No cats');
  questionCatAnswer = answerCorrect;
  alert('You are correct!');
} else{
  alert('You have deviated.');
  console.log(questionCat + ' is not Y/N')
  questionCatAnswer = answerWrong;
}

///Question 3
var questionGamesAnswer;
var questionGames = prompt('Does Raegan play video games? Y/N');
if(questionGames.toUpperCase() ==='Y' || questionGames.toUpperCase() === 'YES') {
  console.log('Lots of video games');
  questionGamesAnswer = answerCorrect;
  alert('You are correct!');
} else if (questionGames.toUpperCase() === 'N' || questionGames.toUpperCase() === 'NO') {
  console.log('NOPE! ALL THE VIDEO GAMES!');
  questionGamesAnswer = answerWrong;
  alert('You were almost right. Excellent job!');
} else{
  alert('You have deviated.');
  console.log(questionGames + ' is not Y/N');
  questionGamesAnswer = answerWrong;
}

///Question 4
var questionArtAnswer;
var questionArt = prompt('Does Raegan doodle? Y/N');
if(questionArt.toUpperCase()==='Y' || questionArt.toUpperCase() === 'YES') {
  console.log('She doodles a lot!');
  questionArtAnswer = answerCorrect;
  alert('You are correct!');
} else if (questionArt.toUpperCase() === 'N' || questionArt.toUpperCase() === 'NO') {
  console.log('The test is lying, I love doodling');
  questionArtAnswer = answerWrong;
  alert('She has never picked up a pencil! Good job!');
} else{
  alert('You have deviated.');
  console.log(questionArt + ' is not Y/N');
  questionArtAnswer = answerWrong;
}

///Question 5
var questionTacoAnswer;
var questionTaco = prompt('Does Raegan like tacos? Y/N');
if(questionTaco.toUpperCase()==='Y' || questionTaco.toUpperCase() === 'YES') {
  console.log('She love a taco!');
  questionTacoAnswer = answerCorrect;
  alert('You are correct!');
} else if (questionTaco.toUpperCase() === 'N' || questionTaco.toUpperCase() === 'NO') {
  console.log('I guess I don\'t feel strongly about tacos');
  questionTacoAnswer = answerWrong;
  alert('It is only food.');
} else{
  alert('You have deviated.');
  console.log(questionTaco + ' is not Y/N');
  questionTacoAnswer = answerWrong;
}

///Write out quiz answers
document.write('<p>Question 1: What movie is Raegan\'s name from?<br />You answered: ' + questionMovie + ' '+ questionMovieAnswer +'</p>');
document.write('<p>Question 2: Does Raegan have a fluffy little kitty cat?<br />You answered: '+ questionCat + ' ' + questionCatAnswer +'</p>')
document.write('<p>Question 3: Does Raegan play video games?<br />You answered ' + questionGames + ' ' + questionGamesAnswer + '</p>');
document.write('<p>Question 4: Does Raegan doodle?<br />You answered '+ questionArt + ' ' + questionArtAnswer+ '</p>');
document.write('<p>Question 5: Does Raegan like tacos?<br />You answered '+ questionTaco +' '+ questionTacoAnswer +'</p>');
