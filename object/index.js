// Write a function to merge two deeply nested objects, where properties from the second object overwrite
// those in the first if there are conflicts. Ensure arrays are concatenated and not overwritten.

function deepDiff(obj1, obj2) {
  for (let key in obj2) {
    if (!obj1[key]) {
      obj1[key] = obj2[key];
    } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      obj1[key] = [...obj1[key], ...obj2[key]];
    } else if (typeof obj1[key] == "object" && typeof obj2[key] == "object") {
      deepDiff(obj1[key], obj2[key]);
    } else {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

let obj1 = { a: 1, b: { c: 2, d: [3] } };
let obj2 = { a: 1, b: { c: 2, d: [4, 6], e: 5 } };
console.log(deepDiff(obj1, obj2));

// Implement a function that finds all properties in an object whose values are functions and returns their names as an array.

function checkfunction(obj) {
  return Object.keys(obj).filter((x) => typeof obj[x] == "function");
}

let person = {
  name: "John",
  age: 23,
  city: "New York",
  isMarried: false,
  salary: 0,
  greet: function () {
    return this.name + " " + this.age;
  },
};

console.log(checkfunction(person));

// Write a function that removes all properties from an object whose values are falsy (null, undefined, false, 0, NaN, or an empty string).

function removeFalsy(obj) {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
}

console.log(removeFalsy(person));

// Create a function that calculates the deep difference between two objects. For example, given:
// obj1 = { a: 1, b: { c: 2, d: 3 } };
// obj2 = { a: 1, b: { c: 2, d: 4, e: 5 } };
// The result should be { b: { d: [3, 4], e: [undefined, 5] } }.

function deepDiffNested(obj1, obj2) {
  const diff = {};
  Object.keys(obj1).forEach((key) => {
    if (obj2[key]) {
      if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        const nestedDiff = deepDiffNested(obj1[key], obj2[key]);
        diff[key] = nestedDiff;
      } else if (obj1[key] !== obj2[key]) {
        diff[key] = [obj1[key], obj2[key]];
      }
    } else {
      diff[key] = [obj1[key], undefined];
    }
  });

  Object.keys(obj2).forEach((key) => {
    if (!obj1[key]) {
      diff[key] = [undefined, obj2[key]];
    }
  });

  return diff;
}

let objA = { a: 1, b: { c: 2, d: 3 } };
let objB = { a: 1, b: { c: 2, d: 4, e: 5 } };

console.log(deepDiffNested(objA, objB));

// Write a function that converts a flat object to a nested one based on its keys. For example,
// { 'a.b.c': 1, 'a.b.d': 2, 'e': 3 }
// should be converted to:
// { a: { b: { c: 1, d: 2 } }, e: 3 }
