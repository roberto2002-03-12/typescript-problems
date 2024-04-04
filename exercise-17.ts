/*
Se te va dar un array de números y un número que se debe eliminar dentro del array de números, 
el array como resultado puede cambiar el orden, pero el número seleccionado seeliminar, además
deberá tener el mismo lenght por lo que una vez eliminado el número seleccionado dentro del array, 
se tendrá que agregar un espacio al final, si es necesario.

al finalizar la función deberá retornar la cantidad que hay ahora en el array en números
*/

function removeElement(nums: number[], val: number): number {
  // esta fue mi solución para el código
  /*
  const numsLenght = nums.length;
  for (let i = numsLenght-1; i >= 0; i--) {
    if (nums[i] === val) nums.splice(i, 1);
  };
  return nums.length;
  */
  // funciona pero una mejor manera sin usar metodos es de esta manera: 
  let j = 0; // Índice para los elementos que no se eliminan

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  nums.length = j;
  return nums.length;
};


console.log(removeElement([3, 2, 2, 3], 3)); // [2, 2]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // [0,1,4,0,3]
console.log(removeElement([3, 3], 3)) // []