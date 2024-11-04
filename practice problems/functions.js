// 1: Parameter-less Function with No Return Type

function greet() {
  console.log("Hello, World!");
}
greet();


// 2: Parameter-less Function with a Return Type 

function getRandom() {
  let random = Math.random();
  console.log("Random Number  : " + random);
  return getRandom; 
}

getRandom();


// 3: Parameterized Function with No Return Type

function displayGreeting(name) {

  console.log("Hello, [name]!")

}

displayGreeting();

//4: Parameterized Function with a Return Type

function calculateSquare(number) {
  return  num * num;

  



}



function square(num) {
  return num * num;
}
let squaredNumber = square(4); // Outputs: 16
console.log(squaredNumber);

squaredNumber = square(-4); // Outputs: 16
console.log(squaredNumber);





