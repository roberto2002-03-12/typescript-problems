/*
Crea un arbol en el cual puedas insertar más nodos,
también puedas buscar valores y encontrar el menor y mayor valor
*/

interface IBinaryTree {
  value: number;
  left: BinaryTree | undefined;
  right: BinaryTree | undefined;
}

class BinaryTree {
  value: number;
  left: BinaryTree | undefined;
  right: BinaryTree | undefined;

  constructor(value: number) {
    this.value = value
  }

  insert(n: number) {
    if (n < this.value)
      if (!this.left) this.left = new BinaryTree(n)
      else this.left.insert(n)
    else
      if (!this.right) this.right = new BinaryTree(n)
      else this.right.insert(n)
  }

  searchValue(n: number): BinaryTree | string {
    if (n === this.value) {
      return this
    }
    else if (n < this.value) {
      if (!this.left) return 'Value not found'
      return this.left.searchValue(n)
    }
    else {
      if (!this.right) return 'Value not found'
      return this.right.searchValue(n)
    }
  }

  minimumValue(): BinaryTree {
    if (this.left === undefined) return this
    return this.left.minimumValue()
  }

  maximumValue(): BinaryTree {
    if (this.right === undefined) return this
    return this.right.maximumValue()
  }
}


const arbol = new BinaryTree(5);
arbol.insert(4);
arbol.insert(3);
arbol.insert(2);
arbol.insert(1);
arbol.insert(6);
arbol.insert(7);
arbol.insert(8);
arbol.insert(9);
arbol.insert(10);

console.log(arbol.searchValue(6))
console.log(arbol.maximumValue())
console.log(arbol.minimumValue())