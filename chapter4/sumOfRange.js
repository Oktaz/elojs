
function range(start, end, step) {
  var r = [];
  if (step == undefined) {
    if (start <= end) {
      step = 1;
    } else {
      step = -1;
    }
  }

  if (start > end) {
    for (x = start; x >= end; x = x + step) {
      r.push(x);
    }
  } else {
    for (x = start; x <= end; x = x + step) {
      r.push(x);
    }
  }


  return r;
}

function sum(numbers) {
  var sum = 0;
  for (x = 0; x < numbers.length; x++) {
    sum += numbers[x];
  }

  return sum;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range(5, 2, -2));
console.log(sum(range(1, 10)));
