// Write a function using switch case to find the grade of a student based
// on marks obtained



function gradeAllotment( mark ){
    let grade = "INVALID MARKS";
    if( mark >= 0 && mark <= 100){
        mark = Math.floor(mark / 10);
        switch( mark){
            case 10:
            case 9:
                grade = 'S'; break;
            case 8:
                grade = 'A'; break;
            case 7:
                grade = 'B'; break;
            case 6:
                grade = 'C'; break;

            case 5:
                grade = 'D'; break;
            case 4:
                grade = 'E'; break;
            case 3:
            case 2: 
            case 1: 
            case 0:
                grade = 'F'; break;
            default: 
                grade = "INVALID MARKS";
        }
    }
    return grade;    
}

console.log( gradeAllotment(91))
console.log( gradeAllotment(101))
console.log( gradeAllotment(-1))
console.log( gradeAllotment(75))


