function sumArray(array){
  var total = 0;

  array.forEach(function(element){
    total += element;
  })

  return total;
}
