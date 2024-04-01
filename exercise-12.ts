function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const filteredValues: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const result: boolean | number = fn(arr[i], i);

    if (typeof result === 'boolean' && result === true) filteredValues.push(arr[i]);

    if (typeof result === 'number' && result !== 0) filteredValues.push(result);
  }

  return filteredValues;
};

console.log(map([1,2,3], function plusone(n) { return n + 1; })); // [2,3,4]
console.log(map([1,2,3], function plusI(n, i) { return n + i; })); // [1,3,5]
console.log(map([10,20,30], function constant() { return 42; })); // [42,42,42]