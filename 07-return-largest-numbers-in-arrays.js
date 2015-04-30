// FreeCodeCamp :: Bonfire
// [07] Return Largest Numbers in Arrays

/*
  Instructions:
  Return an array consisting of the largest number from each provided sub-array. 
  For simplicity, the provided array will contain exactly 4 sub-arrays.

  Tests:
  expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.be.a('array');
  assert(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).should.eql([5,27,39,1001]);
  assert(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]).should.eql([9,35,97,1000000]));
*/

function largestOfFour(arr) {
  // You can do this!
  var results = [];
  // Looping through outter array
  for(outter = 0; outter < arr.length; outter++) {
    // Setting initial value to compare with
    var compare = arr[outter][0];

    // Looping through inner array;
    for(inner = 0; inner < arr[outter].length; inner++) {
      if(arr[outter][inner] > compare) {
        compare = arr[outter][inner];
      }
    }
    results.push(compare);
  }
  
  arr = results;
  return arr;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

