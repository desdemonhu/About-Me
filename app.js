'use strict';

var name = prompt('Welcome Citizen. What is your Designation?');
console.log('Mimic name: '+ name);

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
if(questionCat.toUpperCase()==='Y') {
  console.log('The test is lying, there are no cats.');
  alert('How did you guess?');
} else if (questionCat.toUpperCase()==='N') {
  console.log('No cats');
  alert('You are correct!');
} else{
  alert('You have deviated.');
  console.log(questionCat + ' is not Y/N');
}

///Question 3
var questionGames = prompt('Does Raegan play video games? Y/N');
if(questionGames.toUpperCase()==='Y') {
  console.log('Lots of video games');
  alert('You are correct!');
} else if (questionCat.toUpperCase()==='N') {
  console.log('NOPE! ALL THE VIDEO GAMES!');
  alert('You were almost right. Excellent job!');
} else{
  alert('You have deviated.');
  console.log(questionCat + ' is not Y/N');
}
