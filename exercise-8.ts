/*
Crear un fibonacci, no es complicado. Un detalle es que debes
retornar el array lleno de los números anteriores al número
seleccionado.

Ejemplo: 5
Retornar [0, 1, 1, 2, 3]
*/

// function* fibGenerator(): Generator<number, any, number> {
//   const numbersOfFib: number[] = [];

//   const next = () => {
//     if (numbersOfFib.length === 0) {
//       numbersOfFib.push(0, 1)
//     } else {
//       const result = numbersOfFib[numbersOfFib.length - 2] +  numbersOfFib[numbersOfFib.length - 1]
//       numbersOfFib.push(result);
//     }
//     return numbersOfFib[numbersOfFib.length - 1];
//   }

//   return {
//     next: next
//   }
// };

/*Esta es una función generador, en este caso se utiliza
un yield para retornar un valor no se utiliza un return.

¿Cómo funciona? pues dicha función ejecuta una tarea y al
llamar yield para todo y devuelve el valor u objeto que se haya
especificado, puede funcionar como cascada o puedes declarar
un yield en un bucle, solamente uno.*/

function* fibGenerator(): Generator<number, void, unknown> {
  let num1 =  0, num2 =  1;

  while (true) {
    yield num1;
    const temp = num1 + num2;
    num1 = num2;
    num2 = temp;
  }
}

const gen = fibGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());