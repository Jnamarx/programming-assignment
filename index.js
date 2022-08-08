// Program that return the sum of all prime numbers less than n

const isPrimeNumber = (num) => {
   let x = Math.floor(Math.sqrt(num));
   let j = x;
   while (j >= 2) {
      if (num % j === 0) {
         return false;
      }
      j−−;
   }
   return true;
};

const findSumOfPrimes = (num) => {
   let iterator = num;
   let sum = 0;
   while (iterator >= 2) {
      if (isPrime(iterator) === true) {
         sum += iterator;
      }
      iterator−−;
   }
   return sum;
};


//Program that returns the average of all even numbers from 1 to 1000

function findAverage(){
    const numbers  =  Array.from({length:1000},(v,k)=>k+1)
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}
