function printReverse(array){
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

printReverse([3, 6, 2, 5]);

console.log("**********");

printReverse(["a", "b", "c"]);
