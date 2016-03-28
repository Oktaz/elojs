
function countBs(str) {
  return countChar(str, 'B');
}

function countChar(str, charToCount) {
  var count = 0;
  for (x = 0; x < str.length; x++) {
    if (str.charAt(x) === charToCount) {
      count++;
    }
  }

  return count;
}


console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
