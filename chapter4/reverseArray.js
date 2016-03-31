
function reverseArray(array) {
  var rev = [];
  for (x = array.length - 1; x >= 0; x--) {
    rev.push(array[x]);
  }

  return rev;
}

function reverseArrayInPlace(array) {
  var rev = reverseArray(array);
  for (x = 0; x < array.length; x++) {
    array[x] = rev[x];
  }
}



console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
