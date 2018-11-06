var arrived = false;
var answer;

while (arrived == false) {
  answer = prompt("Are we there yet?");
  if (answer == "yes" || answer == "yeah") {
    arrived = true;
  }
}

alert("Yay, we finally made it!");
