function findCenter(edges: number[][]): number {
  let first = edges[0][0];

  for (let i = 1; i < edges.length; i++) {
    const element = edges[i];

    if (first === element[0]) {
      first = element[0]
    }
    else {
      first = element[1]
    }
  }

  return first
};

console.log(findCenter(
  [[1,16],[16,2],[3,16],[4,16],[16,5],[16,6],[7,16],[16,8],[9,16],[10,16],[16,11],[12,16],[16,13],[16,14],[15,16],[16,17]]
))