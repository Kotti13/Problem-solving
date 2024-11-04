//1.You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.

let array=[150,155,170,160,120,130,115];
let sum=0;
for(let total of array){
    console.log(sum);
}



//2.You are given an array of student grades. Write a function that calculates the average grade.

function calculateGrades(grades){
    let sum=0;
    for (i=0;i<grades.length;i++){
        sum+=grades[i];
    }
    return sum/grades.length;
}
let  grades=[80,80,78,89,67];
let average=calculateGrades(grades);
console.log(average);

//3.You have an array of people ages. Write a function that filters out people who are 18 years old or older.

function filtermajor(age){
    return age.filter(age=>age<18);
}
let ages=[19,20,21,15,14];
let majors=filtermajor(ages);
console.log(majors);

//4.You have an array of integers. Write a function that returns the count of the even numbers in the array.	


