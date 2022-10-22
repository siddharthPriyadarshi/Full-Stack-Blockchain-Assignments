class Rectangle{
    getArea(){
        let area = this.length * this.breadth;
        return area;
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side)
        this.length = side;
        this.breadth = side;
    }
}

const ob = new Square(10);
console.log(ob.getArea());

