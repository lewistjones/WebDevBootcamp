var age = prompt("What is your age?");

if (age < 18) {
  console.log("Sorry, you are not old enough to enter the venue");
} else if (age < 21) {
  console.log("You can enter, but cannot drink");
} else {
  console.log("Come on in. You can drink.");
}

if (age < 0) {
  console.log("ERROR: you haven't been born yet dumb ass");
}

if (age == 21) {
  console.log("happy 21st birday!!");
}

if (age % 2 !== 0) {
  console.log("your age is odd!");
}

if (age % Math.sqrt(age) == 0) {
  console.log("Your age is a square number!");
}
