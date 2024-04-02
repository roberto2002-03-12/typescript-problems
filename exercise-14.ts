/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.
*/

// este metodo funciona si la longitud del string no es absurdamente grande, pero si loes
// botará error por uso de memoria, por lo que pasa 40/45 test case
function isIsomorphic(s: string, t: string): boolean {
  // const isomorfaOneOriginal = s.split('');
  // const isomorfaTwoOriginal = t.split('');
  // let isomorfaOne = s.split('');
  // let isomorfaTwo = t.split('');

  // if (s.length !== t.length || s.length < 3 || t.length < 3) return false;

  // for (let i = 0; i < s.length; i++) {
  //   let letterOfIsoOne = isomorfaOneOriginal[i];
  //   let letterOfisoTwo = isomorfaTwoOriginal[i];

  //   for (let j = 0; j < s.length; j++) {
  //     if (letterOfIsoOne === isomorfaOneOriginal[j]) {
  //       isomorfaOne[j] = letterOfisoTwo;
  //     }
  //   }

  //   for (let j = 0; j < s.length; j++) {
  //     if (letterOfisoTwo === isomorfaTwoOriginal[j]) {
  //       isomorfaTwo[j] = letterOfIsoOne;
  //     }
  //   }
  // }

  // const firstResult = isomorfaOne.join('');
  // const secondResult = isomorfaTwo.join('');

  // if (firstResult === t && secondResult === s) return true
  // else return false;

  // la manera más optima y que acepta palabras absurdamente grandes es: 
  if (s.length !== t.length) return false;

  const mapS = new Map<string, string>();
  const mapT = new Map<string, string>();
 
  for (let i = 0; i < s.length; i++) {
     const charS = s[i];
     const charT = t[i];
 
     if (mapS.has(charS) && mapS.get(charS) !== charT) return false;
     if (mapT.has(charT) && mapT.get(charT) !== charS) return false;
 
     mapS.set(charS, charT);
     mapT.set(charT, charS);
  }
 
  return true;
};

console.log(isIsomorphic('add', 'egg'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));