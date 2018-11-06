var number = 4;

var guess = prompt("Guess a number");

if (guess == number) {
  alert("You Guessed It!!!");
} else if (guess < number) {
  alert("Too low, try again");
} else if (guess > number) {
  alert("Too high, try again");
} else {
  alert("Input a number please");
}
