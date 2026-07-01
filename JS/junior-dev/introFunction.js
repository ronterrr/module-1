function timeAlert(){
    const date = new Date;
    alert(`time stamp: ${date.toISOString()}`);
}

// timeAlert();

function areaOfTriangle(base, height){
    console.log(`Length is ${base} of type ${typeof base}`);
    console.log(`Length is ${height} of type ${typeof height}`);

    const area = 0.5 * base * height;

    console.log(`For triangle with base ${base} and height ${height}, area is ${area}`);
}

let base = "hello";
let height = true;

areaOfTriangle(base, height);