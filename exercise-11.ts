type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  const filteredValues: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const result: boolean | number = fn(arr[i], i);

    if (typeof result === 'boolean' && result === true) filteredValues.push(arr[i]);

    if (typeof result === 'number' && result !== 0) filteredValues.push(arr[i]);
  }

  return filteredValues;
};

console.log(filter([0,10,20,30], function greaterThan10(n) { return n > 10; })); // expected 20, 30
console.log(filter([1,2,3], function firstIndex(n, i) { return i === 0; })); // expected 1
console.log(filter([-2,0,1,2], function plusOne(n) { return n + 1 })); // expected -2, 0, 1, 2

// el código funciona y supera al 96% en velocidad a los programadores que usaron typescript para este problema