// Write a JavaScript program which accept a number as input in the
// function parameter and insert dashes (-) between each two even
// numbers.

let computeDash = (num) =>{
    let str = "";
    for( let i = 0; i<num.length; i++){
        if( parseInt(num[i]) % 2 === 0 && parseInt(num[i+1])%2 === 0){
            str += num[i] + '-';
        }
        else{
            str += num[i];
        }        
    }
    return str;
}

let num = "025468";

console.log( computeDash( num ));
