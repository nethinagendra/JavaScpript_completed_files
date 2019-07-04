// Normal Function
function greet1(name) {
    console.log(`Iam a normal Function ${name}`);
}
greet1('John');

// Function Expression
let greet2 = function(name) {
    console.log(`Iam a Function Expression ${name}`);
};
greet2('Nag');

// Arrow Function
let greet3 = (name) => {
    console.log(`Iam a Arrow Function ${name}`);
};
greet3('Nag');

// Shortcut Arrow
let greet4 = name => console.log(`Iam a Arrow Function Shortcut ${name}`);
greet4('Nag');

// Limitation of Arrow Function with Objects
let student = {
    firstName : 'Naga',
    lastName : 'Sahithi',
    fullName : () =>  {
        return `${student.firstName} ${student.lastName}`;
    }
};
console.log(student.fullName());