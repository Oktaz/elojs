
function deepEqual(x, y) {

  if (typeof x == "object" && x != null
        && typeof y == "object" && y != null) {


    for (var prop in x) {
      if (typof prop == "object") {
        return deepEqual(prop, y[prop]);
      } else {
        
      }
    }

  } else {
    return x === y;
  }
}



var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
