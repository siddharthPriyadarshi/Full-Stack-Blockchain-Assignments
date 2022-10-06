// Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene



/*
    EQUILATERAL : if all sides are of equal length
    ISOSCELESS  : if any of the two sides are of equal length
    SCALENE     : if all three sides are of different length
 */
let typeOfTriangle = (len1, len2, len3) => {
    if ( (len1 === len2) && (len2 === len3) )
        return "EQUILATERAL";
    else if ( (len1 === len2) || (len2 === len3) || (len1 === len3) ){
        return "ISOSCELESS"
    }
    else{
        return "SCALENE"
    }
}

console.log(typeOfTriangle(20, 20, 20))
console.log(typeOfTriangle(20, 10, 20))
console.log(typeOfTriangle(20, 10, 30))