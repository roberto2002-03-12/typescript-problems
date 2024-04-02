/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/
/*
este problema no lo logre resolver, mi error fue no leer adecuadamente el texto y pensar que lo que te pedian
era otra cosa, complicandome de más y haciendo este ejercicio díficil de lo que es en realidad, aquí la explicación:
el primer array tendrá 0 agregados de más al final del array, dichos 0 serán útilizados para
ser remplazados por valores de nums2 o valores mayores que deberían estar al último de la fila.

nums1 y nums2, estan ordenados de manera creciente, pero se deben combinar ambos array
*/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // se crea variables que tendrán como valor los indices finales de nums1 y nums2
  // el "k" viene a ser el final del array (nums1) que se insertará los valores validos
  let i = m - 1; // Comienza desde el final de nums1
  let j = n - 1; // Comienza desde el final de nums2
  let k = m + n - 1; // Comienza desde el final de nums1, que es donde se insertarán los elementos

  // Mientras haya elementos en nums1 o nums2
  while (i >= 0 && j >= 0) {
    // como el final es el mayor, simplemente se debe comparar ambos valores
    // de los nums y así saber quien es mayor para que vaya al final
    // se resta el indice del array cuando ya haya sido utilizado

    // Si el elemento actual de nums1 es mayor que el de nums2, colócalo en la posición k de nums1
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      // De lo contrario, coloca el elemento de nums2 en la posición k de nums1
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // todos los valores altos de nums1 ya han sido comparados con nums2 he insertados
  // por lo que el restante de nums2 es mayor a los otros valores de nums1
  // por eso en este bucle se agrega lo restante de nums2
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);