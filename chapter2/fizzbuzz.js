
var output = '';
for (var x = 1; x <= 100; x++) {

  if (x % 3 == 0 && x % 5 == 0) {
    output += "FizzBuzz\n";
  } else if (x % 3 == 0) {
    output += "Fizz\n";
  } else if (x % 5 == 0) {
    output += "Buzz\n";
  } else {
    output += x + "\n";
  }

}

console.log(output);
