function sorting(array) {
  // your code here
}

function sortingByType(array) {
  // your code here
}

function sortAllClean(array) {
  //your code here 
}


//do not change the code below
let inputArrSorting = [2, 4, 6, 8, 2, 3];
let inputArrSortingType = [1, 3, "array", -45, true, false, "big"];
let inputArrSortingClean = [undefined, null, 456, "def", NaN, [], true, 123, "bcd", false];

console.log(sorting(inputArrSorting)); //[ 2, 2, 3, 4, 6, 8 ]
console.log(sortingByType(inputArrSortingType)); // [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]
console.log(sortAllClean(inputArrSortingClean)); //[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]
console.log(sortAllClean([NaN, undefined])); // []
