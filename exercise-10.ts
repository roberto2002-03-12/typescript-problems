/*
ToBe or NotToBe, es una función en el lado de testing en el cual bueno, esperas si un
valor es como lo querías o no.
*/

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  const valExpect = val;

  const toBe = (val: any): boolean => {
    if (val === valExpect) return true;
    throw new Error("Not Equal")
  }

  const notToBe = (val: any) => {
    if (val !== valExpect) return true;
    throw new Error("Equal")
  }

  return {
    toBe: toBe,
    notToBe: notToBe
  }
};


console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"

