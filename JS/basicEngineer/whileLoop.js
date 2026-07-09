let n = 0;
let condition = true;

// while(condition){
//     console.log(`n is ${n}`);
//     n = n + 1;
//     if(n>100){
//         condition = false;
//     }
// }

function myFunc(num){
    if(typeof num != "number"){
        return "NaN";
    } else if(num<=0){
        return "Number has to be greater than 0";
    }

    while(num!=0){
        console.log(num);
        num -= 1;
    }
}

function firstFunc(){
    let num1 = prompt("Enter first number");

    while(isNaN(num1) || num1<=1){
        num1 = prompt("Enter a valid number greater than 1");
    }

    let num2 = prompt("Enter a second number");

    while(isNaN(num2) || num2<=1){
        num2 = prompt("Enter a valid number greater than 1");
    }

    secondFunc(num1, num2);
}

function secondFunc(num1, num2){

    while(num1!=0){
        let temp = num2;
        while(temp!=0){
            console.log(`${num1}*${temp}=${num1*temp}`);
            temp--;
        }
        num1--;
    }
}

secondFunc(3, 4);