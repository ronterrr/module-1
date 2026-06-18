
let num1 = 749;
console.log(`num1 ${num1}, its type is ${typeof num1}`);

let strNum = "8454";
console.log(`strNum ${strNum}, its type is ${typeof strNum}`);

let myName = "John";
console.log(`My name is ${myName}, its type is ${typeof myName}`);

let isMarried = true;
console.log(`isMarried ${isMarried}, its type is ${typeof isMarried}`);

let nullVal = null;
console.log(`nullVal ${nullVal}, its type is ${typeof nullVal}`);

let unValue;
console.log(`unValue ${unValue}, its type is ${typeof unValue}`);

const bonus = "200";
const salary = 50000;

const salaryGross = bonus + salary;
console.log(`Gross salary is ${salaryGross}, its type ${typeof salaryGross}`);

const paye = salaryGross * 0.16;
console.log(`For gross salary of ${salaryGross}, Paye is ${paye}`);

const nhif = 2500;
console.log(`Nhif deduction is ${nhif}`);

const sha = 2500;
console.log(`SHA is ${sha}`);

const totalDeductions = paye + nhif + sha;
console.log(`Total deduction is ${totalDeductions}`);

const netSalary = salaryGross-totalDeductions;
console.log(`Your net salary is ${netSalary}`);