// FreeCodeCamp :: Bonfire
// [09] Repeat a String Repeat a String

/*
  Instructions:
  Repeat a given string (first argument) n times (second argument). 
  Return an empty string if n is a negative number.

  Tests:
  assert.strictEqual(repeat('*', 3), '***', 'should repeat a string n times');
  assert.strictEqual(repeat('abc', 3), 'abcabcabc', 'should repeat a string n times');
  assert.strictEqual(repeat('abc', -2), '', 'should return an empty string for negative numbers');
*/

function repeat(str, num) {
  // repeat after me
  result = ""; 
  
  if(num > 0 ) {
     for(var i = 0; i < num; i++) {
      result += str;
    }
  }

  return result;
}

repeat('abc', 3);