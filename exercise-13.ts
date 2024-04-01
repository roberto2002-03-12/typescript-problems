/*
 * Definition for singly-linked list.
*/
class ListNode {
  val: number;
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // Si alguna de las listas está vacía, retorna la otra lista
  if (!list1) return list2;
  if (!list2) return list1;

  // Compara los valores de los nodos actuales de ambas listas
  if (list1.val < list2.val) {
    // Si el valor de list1 es menor, agrega list1 al resultado y avanza list1
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    // Si el valor de list2 es menor o igual, agrega list2 al resultado y avanza list2
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

const problem = mergeTwoLists(
  new ListNode(1, new ListNode(2, null)),
  new ListNode(1, new ListNode(3, new ListNode(4, null)))
);

// console.log(problem);
// console.log(problem?.next);
// console.log(problem?.next?.next);
// console.log(problem?.next);