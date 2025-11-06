function swapLowerUpper(sentence) {
  // write your code here!
  // console.log(sentence)
  let result = '';

  for (let i = 0; i < sentence.length; i++) {
    // console.log(sentence[i]);
    let perChar = sentence[i];
    if (perChar === perChar.toUpperCase() && perChar !== perChar.toLowerCase()) {
      result += perChar.toLowerCase();
      // console.log(result, "<< result Lowercase");
    } else if (perChar === perChar.toLowerCase() && perChar !== perChar.toUpperCase()) {
      result += perChar.toUpperCase();
      // console.log(result, "<< result Uppercase");
    } else {
      result += perChar;
    }
  }
  return result;
}

// TEST CASES
console.log(swapLowerUpper('Hello World')); // "hELLO wORLD"
console.log(swapLowerUpper('I aM riZZ')); // "i Am RIzz"
console.log(swapLowerUpper('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(swapLowerUpper('IT sHOULD bE me')); // "it Should Be ME"
console.log(swapLowerUpper('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"