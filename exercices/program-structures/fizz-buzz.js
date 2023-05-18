/* 
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/

for (let number = 1; number <= 100; number++) {
  const isDivisibleByThree = number % 3 === 0;
  const isDivisibleByFive = number % 5 === 0;

  if (isDivisibleByThree) console.log("Fizz");
  else if (isDivisibleByFive) console.log("Buzz");
  else console.log(number)
}

/* 
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
for (let number = 1; number <= 100; number++) {
  const isDivisibleByThree = number % 3 === 0;
  const isDivisibleByFive = number % 5 === 0;
  const isDivisibleByBoth = isDivisibleByThree && isDivisibleByFive;
  
  if (isDivisibleByBoth) console.log("FizzBuzz");
  else if (isDivisibleByThree) console.log("Fizz")
  else if (isDivisibleByFive) console.log("Buzz");
  else console.log(number)
}
