/* Write a JavaScript program to convert temperatures to and from Celsius,
 Fahrenheit*/

//  celcius to farenheit
let toFarenheit = (c) =>{
    let f = ( c*(9/5) ) + 32;
    return f; 
}

// farenheit to celcius 
let toCelcius =  (f) =>{
    let c = (f-32) * (5/9);
    return c; 
}

console.log( toFarenheit(60) + " F");
console.log( toCelcius(45) + " C");
