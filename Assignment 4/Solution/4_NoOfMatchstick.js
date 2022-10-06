const STANDARD_NO = 6; //no of matchstick in 1 step
const noOfMatchstick = ( num ) =>{
    return ( (num * STANDARD_NO) - (num-1))
}

console.log( noOfMatchstick(87) )