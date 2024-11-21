// Write a function that takes two sets and returns their symmetric difference (elements in either set but not both).

function symmetricDiff(setA, setB) {
  return new Set(
    [...setA, ...setB].filter((x) => !(setA.has(x) && setB.has(x)))
  );
}

let setA = new Set([1, 2, 4, 5]);
let setB = new Set([2, 4, 6, 8]);
console.log(symmetricDiff(setA, setB));

// Given a Map, implement a function to group its values based on a callback function. For example, given:
// map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// callback = (val) => val % 2 === 0;
// The result should be { true: ['b'], false: ['a', 'c'] }.

function groupMap(mapInput, callback) {
  let res = new Map();
  res.set("True", []);
  res.set("False", []);
  for (let [key, value] of mapInput) {
    let newKey = callback(value) ? "True" : "False";
    res.get(newKey).push(key);
  }
  return res;
}

var callback = (val) => val % 2 === 0;
let mapInput = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log(groupMap(mapInput, callback));

// Write a function to flatten a deeply nested Map into an object with dot notation. For example, given:
// map = new Map([['a', new Map([['b', new Map([['c', 1]])]])]]);
// The result should be { 'a.b.c': 1 }.

function flattenMap(map, current = "",res={}) {
  for (let [key, value] of map.entries()) {
    let newKey = current ? `${current}.${key}` : key;
    if (value instanceof Map) {
      flattenMap(value, newKey,res);
    } else {
      res[newKey] = value;
    }
  }
  return res;
}

const map1 = new Map([["a", new Map([["b", new Map([["c", 1]])]])]]);
console.log(flattenMap(map1));

// Implement a function that checks if a Set is a subset of another Set.

function subset(set1,set2){
    return set2.isSubsetOf(set1)
}

let set1= new Set([1,2,3,4,5,6]);
let set2 = new Set([3,4,5]);
console.log(subset(set1,set2));

// Write a function to create a bidirectional Map (i.e., a Map where keys can be looked up by values and vice versa). Ensure it handles duplicate entries gracefully.
