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
} else if (questionGames.toUpperCase()==='N') {
  console.log('NOPE! ALL THE VIDEO GAMES!');
  alert('You were almost right. Excellent job!');
} else{
  alert('You have deviated.');
  console.log(questionGames + ' is not Y/N');
}

///Question 4
var questionArt = prompt('Does Raegan doodle? Y/N');
if(questionArt.toUpperCase()==='Y') {
  console.log('She doodles a lot!');
  alert('You are correct!');
} else if (questionArt.toUpperCase() === 'N') {
  console.log('The test is lying, I love doodling');
  alert('She has never picked up a pencil! Good job!');
} else{
  alert('You have deviated.');
  console.log(questionArt + ' is not Y/N');
}

///Question 5
var questionTaco = prompt('Does Raegan like tacos? Y/N');
if(questionTaco.toUpperCase()==='Y') {
  console.log('She love a taco!');
  alert('You are correct!');
} else if (questionTaco.toUpperCase() === 'N') {
  console.log('I guess I don\'t feel strongly about tacos');
  alert('It is only food.');
} else{
  alert('You have deviated.');
  console.log(questionArt + ' is not Y/N');
}
