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

///Question one
var questionMovie = prompt('What movie is Raegan\'s name from?');
if(questionMovie.toUpperCase() === "THE EXORCIST" || questionMovie.toUpperCase() === "EXORCIST"){
  console.log('Mimic answer: '+ questionMovie);
  alert('You are correct!')
} else {
  console.log('Wow, that is so wrong.');
  alert(questionMovie + ' is an excellent answer!');
}
