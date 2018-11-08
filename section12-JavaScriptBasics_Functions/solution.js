// isEven

// function isEven(num){
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isEven(num){
  return num % 2 === 0;
}

// factorial

function factorial(num){
  // returning 1 if num == 0
  if (num == 0) {
    return 1;
  }
  // Define a result variable
  var result = 1;
  // Calculate factorial and store the value in result
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  // return the result
  return result;
}

// Kebab to Snake

// function kTS(string){
//   for (var i = 0; i < string.length; i++) {
//     if (i == "-") {
//       i = "_";
//     }
//   }
//   return string
// }

function kTS(str){
  // replace all "-" to "_"'s
  var newStr = str.replace(/-/g , "_");
  // return str
  return newStr;
}
