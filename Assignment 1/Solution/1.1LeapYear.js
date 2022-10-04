// Write a program to find whether a given year is a leap year or not

function isLeapYear( year ){

    // check if the entered value is number or not
    if(!Number.isInteger(year) ){
        return "Enter correct value"
    } 

    let result = "";
    
    if( year%400 === 0 )
        result = "Leap year";
    else if(year%100 === 0)
        result = "Not a Leap Year";
    else if(year%4 === 0){
        result = "Leap year";
    }
    else{
        result = "Not a Leap Year";
    }

    return result;
}

console.log(isLeapYear(2020));