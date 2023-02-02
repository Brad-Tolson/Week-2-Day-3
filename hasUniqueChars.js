// Write your code below
function stringIsUnique(input) {
  for (i = 0; i < input.length; i++) {
    if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
      return false;
    }
  }
  return true;
}

console.log(stringIsUnique("Fivee"))