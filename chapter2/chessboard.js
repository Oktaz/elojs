
var output = '';

for (var x = 0; x < 8; x++) {

  for (var y = 0; y < 8; y++) {
    output += (x + y) % 2 ? '#' : ' ';
  }
  output += '\n';
}

console.log(output);
