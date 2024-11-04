// // 1. 

// let a=35;
// if(a>0){
//     console.log("the number is positive")
// }

// else if (a<0){
//     console.log("the number is negative")
// }

// else {(a==0)
//     console.log("the number is zero")}

// //2.








// Initialize the sum variable
// let sum = 0;

// // Use a for loop to iterate through numbers from 1 to 5
// for (let i = 1; i <= 5; i++) {
//     sum += i; // Add the current number to the sum
// }

// // Output the result
// console.log("The sum is:", sum);
// function calculateFactorial(n){
//     let i=1;
//     while(n>0){
//         i=i*n;
//         n--;
//     }
//     return (i);
// }
// let a=claculatefactorial(5);
// console.log(i);


var sum = 0;
for (var x = 0; x < 5; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);