const readline = require('readline-sync');

function start() {
  //Data input 
  const cm = parseInt(readline.question('Enter the side length of the square: '));
  const result = find(cm);
  console.log(`${result}cm`);
}

//Finding the area of a square
function find(cm) {
  result = cm * cm
  return result;
}

start();
