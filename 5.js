function sorting(array) {
  // your code here
  let numbers = [];

  for (let i = 0; i < array.length; i++) {
    let perNumber = array[i];
    // console.log(perNumber, '<< perNumber');
    if (typeof perNumber === "number") {
      numbers.push(perNumber);
      // console.log(numbers);
    }
  }

  let numberResult = [];

  while (numberResult.length < numbers.length) {
    let minNumber = Infinity;

    for (let i = 0; i < numbers.length; i++) {
      let perArrNumber = numbers[i];
      // console.log(perArrNumber, '<< perArrNumber');
      if (perArrNumber < minNumber) {
        minNumber = perArrNumber;
        // console.log(minNumber, "<< minNumber");
      }
    }

    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] === minNumber) {
        numberResult.push(numbers[j]);
        numbers[j] = Infinity;
        // console.log(numberResult, '<< numberResult');
      }
    }
  }
  return numberResult;
}

function sortingByType(array) {
  // your code here

  let numberArr = [];
  let stringArr = [];
  let booleanArr = [];

  for (let i = 0; i < array.length; i++) {
    let perElement = array[i];
    // console.log(perElement, "<< perElement");
    if (typeof perElement === 'number') {
      numberArr.push(perElement);
      // console.log(numberArr, "numberArr");
    } else if (typeof perElement === 'string'){
      stringArr.push(perElement);
      // console.log(stringArr, "stringArr");
    } else if (typeof perElement === 'boolean') {
      booleanArr.push(perElement);
      // console.log(booleanArr, "booleanArr");
    }
  }

  let sortedNumberArr = sorting(numberArr);

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let sortedStringArr = [];

  for (let i = 0; i < alphabet.length; i++) {
    let perAlphabet = alphabet[i];
    // console.log(perAlphabet, '<< perAlphabet');
    for (let j = 0; j < stringArr.length; j++) {
      let perString = stringArr[j];
      // console.log(perString, '<< perString');
      if (perString[0] === perAlphabet) {
        sortedStringArr.push(perString);
        // console.log(sortedStringArr, '<< sortedStringArr');
       
      }
    }
  }
  stringArr = sortedStringArr;

  let sortedBooleanArr = [];
  for (let i = 0; i < booleanArr.length; i++) {
    let perBoolean = booleanArr[i];
    // console.log(perBoolean, '<< perBoolean');
    if (perBoolean === false) {
      sortedBooleanArr.push(perBoolean);
    } 
  }
  for (let j = 0; j < booleanArr.length; j++) {
    let perBoolean = booleanArr[j];
    // console.log(perBoolean, '<< perBoolean');
    if (perBoolean === true) {
      sortedBooleanArr.push(perBoolean);
    }
  }
  booleanArr = sortedBooleanArr
  return [sortedNumberArr, stringArr, booleanArr];
}

function sortAllClean(array) {
  //your code here
  let cleanArr = [];

  for (let i = 0; i < array.length; i++) {
    let perElement = array[i];
    // console.log(perElement, '<< perElement');
    if (perElement === null || perElement === undefined || perElement.length === 0) {
      continue;
    }
    if (!(perElement === perElement)) {
      continue;
    }
    cleanArr.push(perElement);
    // console.log(cleanArr, '<< cleanArr');
  }
  if (cleanArr.length === 0) {
    return [];
  }
  return sortingByType(cleanArr)
}

//do not change the code below
let inputArrSorting = [2, 4, 6, 8, 2, 3];
let inputArrSortingType = [1, 3, "array", -45, true, false, "big"];
let inputArrSortingClean = [
  undefined,
  null,
  456,
  "def",
  NaN,
  [],
  true,
  123,
  "bcd",
  false,
];

console.log(sorting(inputArrSorting)); //[ 2, 2, 3, 4, 6, 8 ]
console.log(sortingByType(inputArrSortingType)); // [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]
console.log(sortAllClean(inputArrSortingClean)); //[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]
console.log(sortAllClean([NaN, undefined])); // []
