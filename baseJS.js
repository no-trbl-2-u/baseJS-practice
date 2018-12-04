// ARRAY METHODS (NON-MUTATING)
// arr.map
const map = (func, arr) => {
  // Create a result arry
  const resultArray = [];

  // Iterate over each array element
  for(let i=0; i < arr.length; i++) {

    // Run the provided function on each element
    // then push the result of the fn to resultArray
    resultArray.push(func(arr[i]));
  }
  return resultArray;
};

// arr.filter
const filter = (func, arr) => {
  // Create an empty array to hold results
  const tmp = [];

  // Iterate through the array
  for(let i=0; i < arr.length; i++) {

    // Check if the result of running the provided
    // function on each element evals to true
    if(func(arr[i]) === true) {

      // If it does eval to true, than push that
      // value to the new array
      tmp.push(arr[i]);
    }
  }
  return tmp;
};

// arr.reduce TBD
// const reduce = (func, arr) => arr.reduce(func)

// arr.includes
const includes = (str, arr) => {
  for(let i = 0; i < arr.length; i++){
    if(str === arr[i])
      return true;
    else
      return false;
  }
};

// arr.find
const find = (str, arr) => arr.includes(str) ? [str] : false;

// arr.concat (Flattened)
const concat = (...args) => {
  let resultArray = [];
  
  // Iterate over each arg
  for(let i=0; i<args.length; i++) {

    // then Iterate over each ele in each array
    for(let j=0; j<args[i].length; j++) {

      // Place each element in the new array 
      resultArray.push(args[i][j])
    }
  }
  
  return resultArray;
};

// arr.concat (unFlattened)
const _concat = (...args) => [...args]

// arr.every
const every = (func, arr) => {
  let result = true;
  for (let i=0; i<arr.length; i++) {
    // Apply conditional func to each array element
    if(func(arr[i]) === false){
      // If ANY of the elements return false,
      // return from this block w/ false
      result = false
      return result
    }else{
      result = true
    }
  }
  return result
}

// arr.slice
const slice = (start, end, arr) => {
  let resultArray = [];
  // If the iterator index is in the "sweet spot"
  // Push ele[index] to the new array
  for (let i=0; i<arr.length; i++) {
    if(i >= start && i <= end){
      resultArray.push(arr[i]);
    };
  };
  return resultArray;
}

// arr.indexOf
const indexOf = (arg, arr) => {
  for (let i=0; i<arr.length; i++) {
    if(arr[i] === arg)
      return i
    else if(!arr.includes(arg))
      return -1
  }
}

// Play data
const arr = [1, 2, 3, 4, 5];
const arr2 = [`a`, `b`, `c`];
const arr3 = [0, 1, 2, 3, 4]
const add5 = x => x + 5;
const add = (x, y) => x + y;
const gt1 = x => x > 1

console.log(indexOf(5, arr3))
