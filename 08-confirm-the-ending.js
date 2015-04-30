// FreeCodeCamp :: Bonfire
// [08] Confirm the Ending

/*
  Instructions:
  Check if a string (first argument) ends with the given target string (second argument).

  Tests:
  assert.strictEqual(end('Bastian', 'n'), true, 'should equal true if target equals end of string');
  assert.strictEqual(end('He has to give me a new name', 'name'), true, 'should equal true if target equals end of string');
  assert.strictEqual(end('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain'), false, 'should equal false if target does not equal end of string');
*/

function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetLength = target.length,
      stringLength = str.length,
      stringStart = stringLength - targetLength,
      diff = str.substr(stringStart, targetLength);
  
  return diff === target;
}

end('Bastian', 'n');