function areaOfCircle(r){
    return 3.142 * r * r;
}

let age = 23;

let samsAge = age;

let ac = areaOfCircle;

console.log(typeof ac);

function rectangleArea(l, w){
    return l * w;
}

let rA = rectangleArea;

console.log(rectangleArea(1, 3));