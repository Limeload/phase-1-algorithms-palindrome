function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word);
  return word === reversedWord;
}

function reverse(word) {
return word.split("").reverse().join("");
}
/* 
  Add your pseudocode here
  if the word is same as the word in reverse, it should return true otheriwse 
  it should reverse the input string.
  if the input is same as the reversed input, it should return true otherwise false.
*/ 


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
}

module.exports = isPalindrome;
