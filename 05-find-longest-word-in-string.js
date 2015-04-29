// FreeCodeCamp :: Bonfire
// [05] Find the Longest Word in a String

/*
  Instructions:
  Return the length of the longest word in the provided sentence.

  Tests:
  expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.be.a('Number');
  expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.equal(6);
  expect(findLongestWord('May the force be with you')).to.equal(5);
  expect(findLongestWord('Google do a barrel roll')).to.equal(6);
  expect(findLongestWord('What is the average airspeed velocity of an unladen swallow')).to.equal(8);
*/

function findLongestWord(str) {
  var sentence = str.split(" "),
      longest = "";
  for(var i=0; i<sentence.length; i++) {
    if(sentence[i].length > longest.length) {
      longest = sentence[i];
    }
  }
  str = longest;
  return str.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');