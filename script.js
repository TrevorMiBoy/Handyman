var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning';
} else {
  greeting = 'Welcome!';
}

console.log (greeting);
document.write('<h3>' + greeting + '</h3>');

var testArray = ['Welcome', 'chicken', 'pot pies', 'eat me!'];
console.log (testArray [1]);
console.log (testArray);

testArray [1] = 'turkey';
console.log (testArray [1]);
console.log (testArray);
