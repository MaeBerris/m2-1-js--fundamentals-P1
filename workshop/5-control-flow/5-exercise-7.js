// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q7
// Write a program that goes through every number between 1 and 100, and follows the following rules:
//   - If the number is divisible by 3 (eg. 6), print "Fizz"
//   - If the number is divisible by 5 (eg. 10), print "Buzz"
//   - If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
//   - For all other numbers, print the number itself.

// e.g.
//
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// ...

for(x=1; x <= 100; x++){
    if(x % 3 === 0 && x % 5 === 0){
        console.log("FizzBuzz")
    }else if(x % 3 === 0){
        console.log("Fizz")
    }else if(x % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(x)
    }
}

for(x=1; x <= 100; x++){
    let print = x;

    if(x % 3 === 0 && x % 5 === 0){
        print = "FizzBuzz"
    }else if(x % 3 === 0){
        print = "Fizz"
    }else if(x % 5 === 0){
        print = "Buzz"
    }
        console.log(print)
    }
