
function arrayToList(array) {

  var list = undefined;
  for (x = array.length - 1; x >= 0; x--) {
    list = {
      value: array[x],
      rest: list
    };
  }

  return list;
}

function listToArray(list) {

  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

//adds to front of list
function prepend(elem, list) {
  return {
    value: elem,
    rest: list
  };
}

//returns the element at the given position or undefined
function nth(list, pos) {
  var counter = 0;
  for (var node = list; node; node = node.rest) {
    if (counter++ === pos) {
      return node.value;
    }
  }

  return null;
}

console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
