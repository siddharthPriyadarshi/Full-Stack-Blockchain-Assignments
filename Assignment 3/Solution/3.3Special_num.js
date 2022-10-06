/* 
Write a program to find whether a given number is special number or not-
*/

// factorial of the give number
function factorial(num){
    let fact = 1;
    for( let i = 2; i<=num; i++){
        fact *=i;
    }
    return fact;
}

let isSpecialNumber = ( num ) =>{
    let digit, n = num, sum = 0;

    while( n !== 0){        
        digit = Number.parseInt(n%10);
        n = Number.parseInt(n/10);
        sum += factorial(digit);
    }

    return ( sum === num) ? true : false;
}

console.log( isSpecialNumber(145))

