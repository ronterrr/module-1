let num1 = "23";
let num2 = 23;

let strictEqual = num1 === num2;

console.log(`num1 = ${num1} === num2 = ${num2}
    Ans ${strictEqual} of type ${typeof strictEqual}`);

let nonStrictEquality = num1 == num2;
console.log(`num1 = ${num1} == num2 = ${num2}
    Ans ${nonStrictEquality} of type ${typeof nonStrictEquality}`);


let val1 = "45";
let val2 = 30;

let strictInequality = val1!==val2;

console.log(strictInequality);

let nonStrictInequality = val1 != val2;

console.log(nonStrictInequality);