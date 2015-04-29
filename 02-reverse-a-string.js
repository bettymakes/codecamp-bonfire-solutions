// FreeCodeCamp :: Bonfire
// [02] Reverse a String

/*
  Instructions:
  Reverse the provided string.

  Tests:
  expect(reverseString('Greetings from Earth')).to.equal('htraE morf sgniteerG');
  expect(reverseString('Howdy')).to.equal('ydwoH');
  expect(reverseString('hello')).to.equal('olleh');
  expect(reverseString('hello')).to.be.a('String');
*/

function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}

reverseString('hello');