 function sumNumbers(n) {
        let sum = 0;
        let i = 1;
        while (i <= n) {
            sum += i;
            i++;
        }
        return sum;
    }
    // Example usage:
    console.log(sumNumbers(5)); // Output: 15 (1+2+3+4+5)
    function calculateFactorial(n) {
        let factorial = 1;
        let i = n;
        while (i > 0) {
            factorial *= i;
            i--;
        }
        return factorial;
    }
    // Example usage:
    console.log(calculateFactorial(5)); // Output: 120 (5*4*3*2*1)
    function printEvenNumbers(n) {
        let i = 1;
        while (i <= n) {
            if (i % 2 === 0) {
                console.log(i);
            }
            i++;
        }
    }
    // Example usage:
    printEvenNumbers(10); // Output: 2, 4, 6, 8, 10
    //Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. However, there is an error in the while loop that causes the function to return the wrong result.
    function sumNumbers(n) {
      let sum = 0;
      let i = 0;
      while (i < n) {
        sum += i;
        i++;
      }
      return sum;
    }
    function sumNumbers(n) {

        let sum = 0;
        let i = 1;
        while (i <= n) {
          sum += i;
          i++;
        }
        return sum;
      }
      // Example usage:
      console.log(sumNumbers(5)); // Output: 15 (1+2+3+4+5)
      
    
    
    
    
    
    
    
    
    
    