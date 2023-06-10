function hasTargetSum(array, target) {
  // Write your algorithm here
 const numbers = new Set();

  for (let num of array) {
    const number = target - num;
    if (numbers.has(number)) {
      return true;
    }
    numbers.add(num);
  }

  return false;
};
/*
  This code would need to iterate through the array n times
  depending on the size of the array. The Big O time complexity
  would be linear or O(n).
*/

/* 
  Declare a variable for sorting numbers
    Iterate through each element of the array
      Declare variable for target minus element
      if the result is equal to a number already in Set()
        stop process, display true
      
      add element to Set() if expression not true

    display false if all iterations not true
*/

/*
  This code adds a Set() object to store the number after each 
  false iteration. In each iteration the target is 
  subtracted by the element of the array, after which the result is 
  compared to the Set() object. If any numbers in the Set() match the result
  then the expression returns true. If none match, then false is returned.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
