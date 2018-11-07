// var answer = prompt("are we there yet?");
//
// while (answer !== "yes" && answer !== "yeah") {
//   var answer = prompt("are we there yet?");
// }
//
// alert("YAY, WE MADE IT!!!");

// Version 2

var answer = prompt("are we there yet?");

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
  answer = prompt("are we there yet?")
}

alert("YAY, WE FINALLY MADE IT!!!");
