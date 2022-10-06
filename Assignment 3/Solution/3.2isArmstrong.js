// Write a program to find whether a given number is armstrong number or
// not-

let isArmstrong = ( num ) =>{
    let digit, sum = 0, n = num   ;


    while( n !== 0){        
        digit = Number.parseInt(n%10);
        n = Number.parseInt(n/10);

        sum += Math.pow( digit, 3);
    }
    return ( sum === num ) ? true : false;
}

console.log( isArmstrong(153));