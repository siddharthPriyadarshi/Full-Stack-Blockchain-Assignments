// Write a javascript function find_largest to return the nth largest number
// in an array


let arr = [3, 45, 6, 7, 23, 5, 7, 8]
arr.sort((a, b) => b-a)


function removeDuplicates( arr){
    let start, count = 0;
    for( let i = 0; i<arr.length; i++){
        while( arr[i] === arr[i+1]){
            count++;
            
            if( count === 1) {start = i}
            i++;
        }
        if(count > 0){
            // console.log(start , count)
            arr.splice(start+1, count);
            count = 0;
        }
    }    
}

removeDuplicates(arr); //calling remove duplicates
let n = 3;
let result = arr[n-1]
console.log(result)