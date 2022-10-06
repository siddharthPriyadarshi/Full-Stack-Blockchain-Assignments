// Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

// function to calc factorial of a number
function factorial( num ){
    let result = 1;
    for( let i = 2; i<=num; i++){
        result = result*i;
    }
    return result;
}

// function to check prime
function isPrime( num ){
    if( num === 1){
        return false;
    }
    // 2 and 3 both are prime num
    if (num === 2 || num === 3){
        return true;
    }
    if(num%2 === 0){
        return false;
    }

    for( let i = 3; i< Math.sqrt(num); i++){
        if(num%i === 0){
            return false;
        }
    }

    return true;
}

// calc the factorial of prime num
function primeFactorial( start, end){
    for( let num = start; num<end; num++){
        if(isPrime(num))
        {
                console.log(`Factorial of ${num} is ${factorial(num)}`);
        }                  
    }
}

primeFactorial(1, 14 );  //calling of function
