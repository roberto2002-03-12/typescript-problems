/*
Crea una clase calculadora
*/

class Calculator {
  nro_initial: number;

  constructor(nro_initial: number) {
    this.nro_initial = nro_initial;
  }
  
  add(value: number): Calculator {
    this.nro_initial = this.nro_initial + value;
    return this;
  }
  
  subtract(value: number): Calculator {
    this.nro_initial = this.nro_initial - value;
    return this;
  }
  
  multiply(value: number): Calculator {
    this.nro_initial = this.nro_initial * value;
    return this;
  }
  
  divide(value: number): Calculator {
    if (value === 0) throw new Error("Division by zero is not allowed");
    this.nro_initial = this.nro_initial / value;
    return this;
  }
  
  power(value: number): Calculator {
    const numberToStart = this.nro_initial;
    for(let i = 1; i < value; i++) {
      this.nro_initial = this.nro_initial * numberToStart;
    }
    if (value < 0) {
      const exponente = parseInt(value.toString().slice(1));
      this.nro_initial = 1 / this.power(exponente).getResult();
    }
    if (value === 0) this.nro_initial = 1;
    return this;
  }
  
  getResult(): number {
    return this.nro_initial
  }
}

// buen código, supera al 77% de los usuarios que hicieron este ejercicio

console.log(new Calculator(10).add(5).subtract(7).power(3).getResult());
// console.log(new Calculator(20).divide(0).getResult());
console.log(new Calculator(2).power(1).power(-3).getResult());