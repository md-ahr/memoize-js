// Implement custom memoization function

const employees = [
  { id: 1, name: 'Abdul Halim', post: 'frontend developer', salary: '30000' },
  { id: 2, name: 'Nahid Islam', post: 'ui/ux developer', salary: '35000' },
  { id: 3, name: 'Johir Raihan', post: 'executive manager', salary: '40000' },
];

function getTotalSalary(data) {
  return data.reduce((sum, item) => sum + +item.salary, 0);
}

function memo(func) {
  let cache = {};

  return function (data) {
    const key = JSON.stringify(data);

    if (cache[key]) {
      console.log('get from cache');
      return cache[key];
    }

    const res = func(data);
    cache[key] = res;
    console.log('calculated data');
    return res;
  };
}

const result = memo(getTotalSalary);

console.log(result(employees));
