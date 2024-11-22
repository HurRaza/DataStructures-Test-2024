// Array + Objects + Sets:
// Write a function that:
// Takes an array of objects and a Set of keys.
// Returns a new array where each object contains only the properties whose keys are in the Set.

function KeyExists(arr, keys) {
  for (let obj of arr) {
    for (let key in obj) {
      if (!keys.has(key)) {
        delete obj[key];
      }
    }
  }
  return arr.filter((obj) => Object.keys(obj).length > 0);
}

let arr = [{ a: 1, b: 2, c: 3, d: 4 }, { b: 2 }, { c: 3 }, { d: 4 }];
let keys = new Set(["a", "c"]);
//console.log(KeyExists(arr, keys));

// Maps + Objects:
// Implement a function that converts an array of Maps into a deeply nested object. For example:

// array = [new Map([['a', 'value1']]), new Map([['b', new Map([['c', 'value2']])]])];
// The result should be:
// { a: 'value1', b: { c: 'value2' } }

function deeplyNestedObj(array, obj = {}) {
  for (let map of array) {
    for (let [key, value] of map) {
      obj[key] = value;
      if (value instanceof Map) {
        obj[key] = {};
        deeplyNestedObj([value], obj[key]);
      }
    }
  }
  return obj;
}

let array = [
  new Map([["a", "value1"]]),
  new Map([["b", new Map([["c", "value2"]])]]),
];
//console.log(deeplyNestedObj(array));

// Debouncing with State:
// Write a debouncing function that not only delays execution but also collects all arguments passed during the delay period and passes them as an array when the function is executed.

// Data Transformation:
// Create a function that transforms a nested object with mixed keys (camelCase, snake_case, and kebab-case) into one with all camelCase keys. Ensure the transformation is recursive.

function toCamelCase(key) {
  return key.replace(/([-_][a-z])/g, (c) =>
    c.toUpperCase().replace('-','').replace('_',''));
}

function TransformKeys(obj) {
  if (typeof obj == "object" && obj !== null) {
    let res = {};
    Object.keys(obj).forEach((key) => {
      let camelKey = toCamelCase(key);
      res[camelKey] = TransformKeys(obj[key]);
    });
    return res
  }
  return obj;
}

let obj = {
  "first-name": "John",
  "last_name": "Doe",
  "user_info": {
    "user_id": 12345,
    "user_type": "admin"
   },
   "contact_info": {
      "phone-number": "123-456-7890",
      "email-address": "john.doe@example.com"
    },
    "profile-picture": "profile.jpg"
}

console.log(TransformKeys(obj));

// Data Aggregation:
// Given an array of objects, write a function that:
// Groups the objects by a specific key.
// Computes an aggregate property (e.g., sum, average) for each group.
// (For example, group employees by department and calculate the average salary for each department.)
