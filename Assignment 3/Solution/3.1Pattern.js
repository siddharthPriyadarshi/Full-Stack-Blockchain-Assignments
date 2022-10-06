/*

Using for loops, write a Javascript program to output the following
pattern -
1
2  3
4  5  6
7  8  9  10

*/

const pattern = ( row ) => {
    let num = 1;
    let string = "";
    for( let i = 1; i<= row ; i++){
        string = "";
        for( let j = 1; j<=i; j++){
            string += num++ + " ";
        }
        console.log(string);
    }
}

pattern(4);