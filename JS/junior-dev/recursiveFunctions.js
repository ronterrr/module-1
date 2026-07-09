// A recursive function is a function that calls itself.

function salaryGrossPromptProcess(){
    let gross = prompt("Enter your gross salary");

    if(!isNaN(gross)){
        console.log(`You entered this amount: ${gross}`);
        return;
    }

    alert("Invalid gross salary entered. Enter a number for gross salary.");
    salaryGrossPromptProcess();
}

salaryGrossPromptProcess();


function factorial(n = 1, lastSolution = 1){
    if(n <= 1){
        return lastSolution;
    }
    const newSolution = n * lastSolution;
    const newN = n -1;

    factorial(newN, newSolution);
}