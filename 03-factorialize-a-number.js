// FreeCodeCamp :: Bonfire
// [03] Factorialize a Number

/*
  Instructions:
  Return the factorial of the provided integer.

  Tests:
  expect(factorialize(20)).to.equal(2432902008176640000);
  expect(factorialize(10)).to.equal(3628800);
  expect(factorialize(5)).to.equal(120);
  expect(factorialize(5)).to.be.a("Number");
*/

function factorialize(num) {
  var result = 1;
  for(i = 1; i <= num; i++) {
    result = result * i;
  }
  num = result;
  return num;
}

factorialize(5);