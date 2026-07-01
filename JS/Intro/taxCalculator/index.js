let grossMonthlySalary = null;
let paye = null;
let tier = null;
let nssf = null;
let employerNssf = null;
let shif = null;
let housingLevy = null;

const bracket1 = 24000;
const bracket2 = 32333;
const bracket3 = 500000;
const bracket4 = 800000;

const band1 = bracket1 * 0.1;
const band2 = bracket2 * 0.25;
const band3 = bracket3 * 0.3;
const band4 = bracket4 * 0.325;
const personalRelief = 2400;

while(true){
    let gross = prompt("Enter your gross salary: ");

    if(!isNaN(gross)){
        gross = Number(gross);
        if(gross>0){
            grossMonthlySalary = gross;
            break;
        }
    }
    alert(`Invalid amount entered. 
        Ensure you enter a number greater than 0
        `);
}

console.log(`Gross salary ${grossMonthlySalary} its type is ${typeof grossMonthlySalary}`);

// PAYE

if(grossMonthlySalary<=24000){
    paye = 0.1 * grossMonthlySalary;
    tier = "0 - 24,000 KSH";
} else if(grossMonthlySalary<=32333){
    paye = 0.25 * grossMonthlySalary;
    tier = "24,001 - 32,333 KSH"
} else if(grossMonthlySalary<=500000){
    paye = 0.3 * grossMonthlySalary;
    tier = "32,334 - 500,000 KSH";
} else if(grossMonthlySalary<=800000){
    paye = 0.325 * grossMonthlySalary;
    tier = "500,001 - 800,000 KSH"
} else if(grossMonthlySalary>800000){
    paye = 0.35 * grossMonthlySalary;
    tier = "800,000+ KSH"
}

alert(`Paye is ${paye}
    Tier is ${tier}`);


// NSSF

if(grossMonthlySalary<=9000){
    nssf = 0.06 * grossMonthlySalary; //Accounts for salary less than or equal to 9k
} else if(grossMonthlySalary<=108000){
    nssf = (0.06 * 9000) + (0.06 * (grossMonthlySalary - 9000)); 
    //Accounts for salary between 9k and 108k
}

if(nssf>6480 || grossMonthlySalary>108000){
    nssf = 6480;
}

employerNssf = nssf;

