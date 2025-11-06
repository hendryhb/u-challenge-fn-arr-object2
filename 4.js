function sortAlphabet(str) {
  // write your code here!

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let sortResult = ''

  for (let i = 0; i < alphabet.length; i++) {
    // console.log(alphabet[i], '<< alphabet[i]');
    let perAlphabet = alphabet[i];
    
    for (let j = 0; j < str.length; j++) {
      let perChar = str[j];
      if (perChar === perAlphabet) {
        sortResult += perChar;
        // console.log(sortResult, '<< sortResult');
      }
    }
  }
  return sortResult
}

// TEST CASES
console.log(sortAlphabet('hello')); // 'ehllo'
console.log(sortAlphabet('truncate')); // 'acenrttu'
console.log(sortAlphabet('developer')); // 'deeeloprv'
console.log(sortAlphabet('software')); // 'aeforstw'
console.log(sortAlphabet('aegis')); // 'aegis'
