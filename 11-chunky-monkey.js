// FreeCodeCamp :: Bonfire
// [11] Chunky Monkey

/*
  Instructions:
  Write a function that splits an array (first argument) into groups the length 
  of size (second argument) and returns them as a multidimensional array.

  Tests:
  assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']], 'should return chunked arrays');
  assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]], 'should return chunked arrays');
  assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]], 'should return the last chunk as remaining elements');
*/

// Solution 1
function chunk(arr, size) {
  // Break it up.
  var result = [],
      counter = 0;
  
  for(i=0; i < arr.length; i+=size) {
    var segment = [];
    
    for(var x=0; x<size; x++) {
      var index = counter+x;
      
      if(index < arr.length) {
        segment.push(arr[index]);
      }
    }
    
    result.push(segment);
    counter += size;
  }
  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);


// Solution 2
function chunk(arr, size) {
  // Break it up.
  var result = [],
      loopLength = Math.ceil(arr.length / size);
  
  for(i=0; i < loopLength; i++) {
    var segment = arr.splice(0, size);
    result.push(segment);
  }

  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);