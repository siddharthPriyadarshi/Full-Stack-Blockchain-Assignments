// Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000


// Here upperBound is exclusive
let result = ( upperBound ) => {
    if(upperBound > 1000){
        return "invalid input"
    }

    let sum = 0;
    for(let i = 3; i<upperBound; i++){
        if( i%3 === 0 || i%5 === 0 ){
            sum += i;
        }
    }
    
    return sum;
}

console.log( result(10)); //3+5+6+9 = 23