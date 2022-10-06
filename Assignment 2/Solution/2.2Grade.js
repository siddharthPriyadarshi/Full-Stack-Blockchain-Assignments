// Write a function using switch case to find the grade of a student based
// on marks obtained

function gradeAllotment( mark ){
    let grade;
    if( mark>=91 && mark<=100){
        grade = 'S';
    }
    else if( mark>=81 && mark <= 90){
        grade = 'A';
    }
    else if( mark>=71 && mark <= 80){
        grade = 'B';
    }
    else if( mark>=61 && mark <= 70){
        grade = 'C';
    }
    else if( mark>=51 && mark <= 60){
        grade = 'D';
    }
    else if( mark>=41 && mark <= 50){
        grade = 'E';
    }
    else if( mark>=0 && mark<=40){
        grade = 'F';
    }
    else{
        return "INVALID MARKS"
    }

    return grade;
}

console.log( gradeAllotment(91))
console.log( gradeAllotment(101))
console.log( gradeAllotment(-1))
console.log( gradeAllotment(75))