// 1. simple interest for loan 

let principal = 10000;
let interest=5;
let years=3;

let simpleinterest=(principal * interest * years)/100;

console.log("simpleinterest:"+simpleinterest);


// 2.Calculate the Area of a Garden

let radius =14;
let pi=3.14159;
let area=(pi * radius * radius);

console.log("area:"+area);

// 3. Swap the Price of Two Products

let priceA = 150;
let priceB = 200;

console.log("priceA:"+priceA);
console.log("priceB:"+priceB);

// after swap 

priceA = priceA+priceB;
priceB = priceA-priceB;
priceA = priceA-priceB;

console.log("priceA:"+priceA);
console.log("priceB:"+priceB);


// 4. Calculate the Average Marks of a Student

let num1 = 85;
let num2 = 90;
let num3 = 95;

let average = (num1 + num2 + num3) / 3;
console.log("average:"+average);


// 5.Calculate Compound Interest for an Investment

let p=5000;
let i=6;
let t=4;

let result= p * (1+i/100)^4-p;
console.log("Compund interest:"+result);


// 6. Determine Profit from Selling a Laptop


let costPrice = 800;
let sellingPrice = 950;


let profit = sellingPrice - costPrice;

console.log("profit:" + profit);


// 7. Calculate the Fencing Required for a Rectangular Field

let length = 50;
let width = 30;

let perimeter = 2 * (length + width);

console.log("fencing required:"+perimeter);


// 8.Bitwise AND for Security Permissions

let x=25;
let y=19;
let AND=x&y;
console.log("AND operator:"+AND);


// 9. Convert Celsius to Fahrenheit for Weather Reporting

let celsius=22;


//convert celsius to fahrenheit

let fahrenheit=(celsius * 9/5) + 32;

console.log("fahrenheit:"+fahrenheit+"°F.");

// 10.Calculate the Volume of a Water Tank

let Radius=5;
let Height=10;

let Volume = 3.14159 * Radius * Radius * Height;

console.log("Volume:"+Volume);







