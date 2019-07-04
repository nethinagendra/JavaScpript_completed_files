//Empty Object Creation
let fridge={};
console.log(fridge);

//Add Propertites to an object
fridge.eggs=20;
fridge.veg='Tamotas';
fridge.juice='2lts';
console.log(fridge);

//Create afully loaded object
let mobile={
    brand :'Apple',
    price :35000,
    color :'Silver',
    isInsured :false

};
console.log(mobile);

// Access the properties of an object using dot notation
console.log(`Mobile Brand :${mobile.brand}`);


// Access the properties of an object using [] notation
console.log(`Mobile Brand :${mobile['brand']}`);

// Nested Object
let student = {
    name : 'Nagendra',
    age : 22,
    course : {
        name : 'Engineering',
        year : 4,
        rank : 458
    },
    college : {
        name : 'IIT Mumbai',
        location : 'Mumbai',
        estd : 1880
    },
    address : {
        city : 'Bangalore',
        state : 'Ka',
        country : 'India'
    }
};

console.log(student);

// Access the nested objects
console.log(student.college);
console.log(student.college.location);

// delete an object
console.log(student);
delete student.college;
console.log(student);

