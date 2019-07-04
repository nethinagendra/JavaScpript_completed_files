// If - else
let time = -54;
if(time >=0 && time <= 12){
    console.log('Good Morning');
}
else if(time >12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time >17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Enter a Proper Time');
}

// Switch Statements
let day = new Date().getDay();
let today = 'Today is : ';
day = 10;
switch(day){
    case 0:
        today += 'SUNDAY';
        break;
    case 1:
        today += 'MONDAY';
        break;
    case 2:
        today += 'TUESDAY';
        break;
    case 3:
        today += 'WEDNESDAY';
        break;
    case 4:
        today += 'THURSDAY';
        break;
    case 5:
        today += 'FRIDAY';
        break;
    case 6:
        today += 'SATURDAY';
        break;

    default:
        today += 'No Match';
        break;
}
console.log(today);

// For-loop to print 0 - 10
let output = '';
for(let i=0; i<=10; i++){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// for-loop to print 20 - 0 with the diff is 2
output = '';
for(let i = 20; i>=0; i-=2){
    if(i > 0){
        output += `${i} - `;
    }
    else {
        output += `${i}`;
    }
}
console.log(output);

// For-loop to print 00 - 20
output = '';
for(let i = 0; i<=20; i++){
    if(i <= 9){
        output += `0${i} `;
    }
    else{
        output += `${i} `;
    }
}
console.log(output);

// For loop for multiplication Table
output = '';
for(let i=1; i<=10; i++){
    for(let j=1 ; j<=10; j++){
        output += `\n ${i} * ${j} = ${i * j}`;
    }
    output += '\n-------------------------------- ';
}
console.log(output);

// For Loop to print number ascending order dual number
output = '';
let theNumber = 9;
for(let i = 1; i <= theNumber; i++){
    for(let j=1 ; j <= i; j++){
        output += ` ${i}`;
    }
    output += `\n`;
}
console.log(output);

// For Loop to print number ascending order same number
output = '';
theNumber = 9;
for(let i = 1; i <= theNumber; i++){
    for(let j=1 ; j <= i; j++){
        output += ` ${j}`;
    }
    output += `\n`;
}
console.log(output);

// For Loop to print number in reverse Order
output = '';
theNumber = 5;
for(let i=theNumber; i>=1; i--,theNumber--){
    for(let j = 1; j<=i ; j++){
        output += `${j} `;
    }
    output += '\n';
}
console.log(output);

