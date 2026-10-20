// Part 2: JavaScript Questions
// Each section includes the question's example and an additional test.

// 1. groupBy
// Tested with the provided users grouped by city and an extra test grouped by role.
function groupBy(array, key) {
  return array.reduce((groups, item) => {
    const groupKey = item[key];

    if (!Object.prototype.hasOwnProperty.call(groups, groupKey)) {
      groups[groupKey] = [];
    }

    groups[groupKey].push(item);
    return groups;
  }, {});
}

const users = [
  { name: 'Ada', city: 'Aba' },
  { name: 'Obi', city: 'Enugu' },
  { name: 'Ngozi', city: 'Aba' },
];

console.log('1. groupBy example:', groupBy(users, 'city'));
console.log(
  '1. groupBy extra test:',
  groupBy(
    [
      { name: 'Ada', role: 'admin' },
      { name: 'Obi', role: 'user' },
      { name: 'Zara', role: 'admin' },
    ],
    'role'
  )
);


// 2. flatten
// Tested with the deeply nested example and an extra array containing empty arrays.
function flatten(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log('2. flatten example:', flatten([1, [2, [3, [4]]], 5]));
console.log('2. flatten extra test:', flatten([[], 1, [2, [], [3]]]));
