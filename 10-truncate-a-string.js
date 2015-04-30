// FreeCodeCamp :: Bonfire
// [10] Truncate a String

/*
  Instructions:
  Truncate a string (first argument) if it is longer than the given maximum 
  string length (second argument). Return the truncated string with a '...' ending.

  Note that the three dots at the end add to the string length.

  Tests:
  expect(truncate('A-tisket a-tasket A green and yellow basket', 11)).to.eqls('A-tisket...');
  assert(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length) === 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is = length');
  assert.strictEqual(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2), 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is < length');
*/

function truncate(str, num) {
  // Clear out that junk in your trunk

  if(str.length <= num) {
    return str;
  } else {
     var result = str.slice(0, num-3) + "...";
    return result;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);