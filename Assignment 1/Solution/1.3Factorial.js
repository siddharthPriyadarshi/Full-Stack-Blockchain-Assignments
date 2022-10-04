// Program to find the factorial of the given number


function factorial( num ){
    let result = 1;
    
    for( let i = 2; i<=num; i++){
        result = result*i;
    }

    return result;
}

let output = factorial(8);

console.log(output);