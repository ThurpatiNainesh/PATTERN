
const first1 = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second1 = new Map([
  [1, 'uno'],
  [2, 'dos'],
]);

// Merge maps with an array. The last repeated key wins.
const merged = new Map([...first1, ...second1, [1, 'eins']]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx==================================>>>>>>>>>>>>>>>>>>>

const kvArray = [['key1', 'value1'], ['key2', 'value2']];

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap3 = new Map(kvArray);

console.log(myMap3.get('key1')); // "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap3)); // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap3]);

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap3.keys())); // ["key1", "key2"]

const original = new Map([
  [1, 'one'],
]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)





  
