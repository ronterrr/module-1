/*
Falsey
1. false
2. 0
3. -0
4. null
5. undefined
6. ''
7. NaN

Anything that is not falsey is truthy
*/

let userName1 = "John Mwangi";
let userName2 = "";

let activeUserName = userName2 || userName1;

console.log(activeUserName);

let bothUserOk = userName1 && userName2;
console.log(bothUserOk);

