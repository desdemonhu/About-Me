'use strict';

var name = prompt('Welcome Citizen. What is your Designation?');
console.log('Mimic name: '+ name);

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
var questionMovie = prompt('What movie is Raegan\'s name from?');
if(questionMovie.toUpperCase() === "THE EXORCIST" || questionMovie.toUpperCase() === "EXORCIST"){
  console.log('Mimic answer: '+ questionMovie);
  alert('You are correct!')
} else {
  console.log('Wow, that is so wrong.');
  alert(questionMovie + ' is an excellent answer!');
}

///Question 2
var questionCat = prompt('Does Raegan have a fluffy little kitty cat? Y/N');
if(questionCat.toUpperCase() === 'Y' || questionCat.toUpperCase() === 'YES') {
  console.log('The test is lying, there are no cats.');
  alert('How did you guess?');
} else if (questionCat.toUpperCase() === 'N' || questionCat.toUpperCase() === 'NO') {
  console.log('No cats');
  alert('You are correct!');
} else{
  alert('You have deviated.');
  console.log(questionCat + ' is not Y/N');
}

///Question 3
var questionGames = prompt('Does Raegan play video games? Y/N');
if(questionGames.toUpperCase() ==='Y' || questionGames.toUpperCase() === 'YES') {
  console.log('Lots of video games');
  alert('You are correct!');
} else if (questionGames.toUpperCase() === 'N' || questionGames.toUpperCase() === 'NO') {
  console.log('NOPE! ALL THE VIDEO GAMES!');
  alert('You were almost right. Excellent job!');
} else{
  alert('You have deviated.');
  console.log(questionGames + ' is not Y/N');
}

///Question 4
var questionArt = prompt('Does Raegan doodle? Y/N');
if(questionArt.toUpperCase()==='Y' || questionArt.toUpperCase() === 'YES') {
  console.log('She doodles a lot!');
  alert('You are correct!');
} else if (questionArt.toUpperCase() === 'N' || questionArt.toUpperCase() === 'NO') {
  console.log('The test is lying, I love doodling');
  alert('She has never picked up a pencil! Good job!');
} else{
  alert('You have deviated.');
  console.log(questionArt + ' is not Y/N');
}

///Question 5
var questionTaco = prompt('Does Raegan like tacos? Y/N');
if(questionTaco.toUpperCase()==='Y' || questionTaco.toUpperCase() === 'YES') {
  console.log('She love a taco!');
  alert('You are correct!');
} else if (questionTaco.toUpperCase() === 'N' || questionTaco.toUpperCase() === 'NO') {
  console.log('I guess I don\'t feel strongly about tacos');
  alert('It is only food.');
} else{
  alert('You have deviated.');
  console.log(questionTaco + ' is not Y/N');
}

///Write quiz answers to quiz-answers
document.write('Question 1: What movie is Raegan\'s name from? You answered: ' + questionMovie);
document.write('Question 2: Does Raegan have a fluffy little kitty cat? You answered: '+ questionGames)
document.write('Question 3: Does Raegan play video games? You answered ' + questionGames);
document.write('Question 4: Does Raegan doodle? You answered '+ questionArt);
document.write('Question 5: Does Raegan like tacos? You answered '+ questionTaco);
