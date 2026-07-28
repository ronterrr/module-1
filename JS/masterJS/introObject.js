/* 

Objects are a complex data type.
Its a data type that houses other types. 

->{
    key:value,
    key:value,
    key:value
}



*/

const student = {
    name: "John Mwangi",
    age: 34,
    "favourite quote": "Backwards Never Forward Ever",
    parent: {
        name: "Maggnus",
        phone: "2547324324",
    },
    pets: {},
    34: "Favourite number",
    sayMyName: function(){
        console.log(`${student.name}`);
    },
    anounce: function(){
        alert(`${student.name} gracing you with his/her presence`);
    }
};

// create an obj called car. properties: name, model, top_speed
// engineInformation: <obj>how many cylinders
// manufacturer: <obj> name, aka, country of origin
// number as property(key): any number
// alertInfo: <func> when called prints car information as an alert
// fun fact

const car = {
    name: "Subaru",
    model: "Outback",
    top_speed: 200,

    engineInformation : {
        cylinderCount: 8
    },

    manufacturer : {
        name: "Subaru Corporation",
        originCountry: "Japan"
    },

    22 : "",

    alertInfo : () => {
        alert(`${car.name} ${car.model}, Top Speed: ${car.top_speed}, Cylinder Count: ${car.engineInformation.cylinderCount}`);
    },

    funFact : `${car.name} is manufcatured by ${car.manufacturer.name} and originated from the country of ${car.manufacturer.originCountry}`,
}