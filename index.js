function hasTargetSum(array, target) {
  const seenNumbers = {}
  
  
  for (let i = 0; i < array.length; i++){  //n steps
    const complement = target - array[i];
  
    if (seenNumbers[complement]) return true; //1 step
    seenNumbers[array[i]] = true;
    
}
  return false
}

/* 
  Write the Big O time complexity of your function here

  0(n) time complexity 1 set of n steps, and 1 step; remove the constants = 0(n)
*/

/* 
  Add your pseudocode here
testArr([1,2,3,4], 6)
seenNumbers = {
  1: true, >>>not a number we've seen, so added to the object
  2: true,
  3: true, 
}
4: is the answer because it's compliment is 2, which we have already seen

We need to create an object to keep track of the numbers we have already seen.
We will only iterate through the array once, and will add that number to our object.
Identify the complimentary number to add and equal to target.
Check is any key on our object is the complement; if true, return true.  IF not, add that number to our object.
*/

/*
  Add written explanation of your solution here

Written out with comments and Pseudocode:
function hasTargetSum(array, target) {
  // We need to create an object to keep track of the numbers we have already seen.
  const seenNumbers = {}
  // We will only iterate through the array once, and will add that number to our object.
  for (let i = 0; i < array.length; i++){
  // Identify the complimentary number to add and equal to target.
    const complement = target - array[i];
  
    if (seenNumbers[complement]) return true;
    //otherwise, add the number to seenNumbers
    seenNumbers[array[i]] = true  //add the i variable from the array into the seenNumbers object
}
  return false
}
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
