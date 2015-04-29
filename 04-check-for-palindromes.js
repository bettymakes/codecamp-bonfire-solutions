// FreeCodeCamp :: Bonfire
// [04] Check for Palindromes

/*
  Instructions:
  Return true if the given string is a palindrome. Otherwise, return false.

  Tests:
  expect(palindrome("eye")).to.be.a("boolean");
  assert.deepEqual(palindrome("eye"), true);
  assert.deepEqual(palindrome("race car"), true);
  assert.deepEqual(palindrome("not a palindrome"), false);
  assert.deepEqual(palindrome("A man, a plan, a canal. Panama"), true);
  assert.deepEqual(palindrome("never odd or even"), true);
  assert.deepEqual(palindrome("nope"), false);
*/

function palindrome(str) {
  // Good luck!
  // Lowercasing and removing all the commas, periods, and spaces.
  var originalString = str.toLowerCase().replace(/[ .,]/g, "");
  var compareString = originalString.split("").reverse().join(""); 

  // === will always return a boolean. 
  // If they're the same, returns true.
  // If they're different, returns false.
  return originalString === compareString;
}



palindrome("eye");