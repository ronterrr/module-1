let val1 = true;
let val2 = true;
let result1 = val1 && val2;

console.log(`val1 = ${val1}, val2 = ${val2}. val1 && val2 = ${result1}`);

let mercyAge = 20;
let mercyBalance = 50000;

let isGreaterThan18 = mercyAge > 18;
console.log(`Is Mercy's age greater than 18? ${isGreaterThan18}`);

let hasMoreThan20k = mercyBalance > 20000;
console.log(`Does Mercy have more than 20k? ${hasMoreThan20k}`);

console.log(`Is Mercy's age greater than 18 and does she have more than 20k in her account? ${(isGreaterThan18 && hasMoreThan20k) ? "Yes" : "No"}`);

let simplified = mercyAge > 18 && mercyBalance > 20000;

console.log(`simplified: ${simplified}`);
console.log(`further simplification is ${simplified ? "Yes" : "No"}`);