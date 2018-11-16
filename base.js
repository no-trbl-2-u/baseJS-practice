
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

// arr.includes
const includes = (str, arr) => {
  for(let i = 0; i < arr.length; i++){
    if(str === arr[i])
      return true;
    else
      return false;
  }
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

// Play data
const arr = [1, 2, 3];
const arr2 = [`a`, `b`, `c`];

