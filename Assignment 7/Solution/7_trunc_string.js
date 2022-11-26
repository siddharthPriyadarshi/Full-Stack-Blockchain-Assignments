// Input a String S, and check its length and if the length is greater than 4,
// truncate the input String

// 7.1
const stringTruncate = ( str ) => {
    let truncatedString = (str?.length > 4)? str.slice(0, 4)+"...": str ;
    return truncatedString;
};

//7.2
const remWhiteSpace = ( str ) => str?.replaceAll(" ", "") ;


//7.3 : replace first word with second word
const replaceWord = (str) =>{
    let words = str.split(" ");
    let newWord = "";

    //using loop in reverse order
    for( let i = words.length-1; i>=0; i--){
        newWord+= words[i];
    }
    return newWord;
};


// 7.4 : replace 'a' with 'x'
const replaceChar = (str) => {
    return str.replaceAll('a', 'x')
};


let input = "apple";
// console.log(replaceChar(input));


/*
5 : What string method can be used to convert string into array ?
Soln: split() method can be used to convert string into Array

6. What string method can be used to check the occurrence of a specified
text in a string?
Soln: incudes() : it returns true if specified text is occurred in String else false

7. How can you break string to new line in js?
Soln: using '\n' operator.
ex: console.log("Hello \nWorld")
Output: Hello
        World

8. Write a Javascript function to test whether the first character of a string
is lowercase.
*/

// 7.8: function to rest wheter first char of a string is lowercase

// returns true if first char is lower case else false
const isFirstLower = (str) =>
{
    let firstChar = str[0];
    return (str[0]>= 'a' && str[0]<='z')? true : false;
};


// 7.9 : 
/*
  Soln:  Using toLowerCase or toUpperCase method for checking
                            OR
        We can also use regex to check the pattern.
*/
// return true in condition : "yes", "YEs", "YES"
const correctVerdict = (str) => 
{
    let str2 = str.trim();  
    return (str2.toLowerCase() === "yes")? true: false
};


// 7.10 : 
let s = "This is a boy";

// a: 
console.log(s.toUpperCase());
// b
console.log(s[0].toUpperCase());
//c
console.log(s[0].toLowerCase());
// d : swapping the parts of string

const swapString = (str) =>{
    let str1= str.slice(0, str.length/2);
    let str2= str.slice(str.length/2, str.length);
    
    return str2+str1;
}
// console.log("Hello BOi")

// e: count repeating char
const countRepeatingChar = ( str ) =>{
    for(let i = 0; i<str.length; i++){
        let count = 0;
        for(let j = i+1; j<str.length; j++){
            if(str[i] === str[j]){
                count++;
            }
        }
        if(count>0){
            console.log(`${str[i]} : ${count}`);
        }
    }
}

// countRepeatingChar("Hello")

// f: reverse the strign
const strRev = ( str ) =>{
    return str.split('').reverse().join('');
}

console.log(strRev("This is a boy"));