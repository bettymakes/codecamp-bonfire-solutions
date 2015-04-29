// FreeCodeCamp :: Bonfire
// [06] Title Case a Sentence

/*
  Instructions:
  Return the provided string with the first letter of each word capitalized.

  Tests:
  expect(titleCase("I'm a little tea pot")).to.be.a('String');
  expect(titleCase("I'm a little tea pot")).to.equal("I'm A Little Tea Pot");
  expect(titleCase("sHoRt AnD sToUt")).to.equal("Short And Stout");
  expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).to.equal("Here Is My Handle Here Is My Spout");
*/

function titleCase(str) {
  var sentence = str.toLowerCase().split(" ");

  for(i=0; i < sentence.length; i++) {
    firstLetter = sentence[i].charAt(0).toUpperCase();
    sentence[i] = sentence[i].replace(/\b[a-zA-Z]/, firstLetter);
  }
  str = sentence.join(" ");
  
  return str;
}

titleCase("I'm a little tea pot");