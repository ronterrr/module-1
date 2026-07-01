function sayMyName(){
    let firstName = "Samson";
    console.log(`First Name: ${firstName}`);

    let secondName = "Johnna";
    console.log(`Second Name: ${secondName}`);

    let fullName = `${firstName} ${secondName}`;
    console.log(`Names are ${fullName}`);
}

let sayMyNameValue = sayMyName();

console.log(`Function returned ${sayMyNameValue}`);