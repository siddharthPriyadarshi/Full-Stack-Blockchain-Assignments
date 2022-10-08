// Write a JavaScript program to get the volume of a Cylinder, Sphere and
// Cone with four decimal places using objects and classes


class Cylinder {
    constructor(r, h){
        this.PI = 3.14;
        this.radius = r;
        this.height = h;
    }
    getVolume() {
        this.vol = this.PI  * Math.pow(this.radius, 2) * this.height;
        this.vol.toFixed(4);        
        console.log(`Vol of Cylinder: ${this.vol.toFixed(4)}`);
    }
}

class Sphere {
    constructor(r){
        this.PI = 3.14;
        this.radius = r;
    }

    getVolume() {
        this.vol = (4/3)*this.PI  * Math.pow(this.radius, 3);
        console.log(`Vol of Sphere: ${this.vol.toFixed(4)}`);
    }
}

class Cone {
    constructor(r, h){
        this.PI = 3.14;
        this.radius = r;
        this.height = h;
    }
    getVolume() {
        this.vol = (this.PI  * Math.pow(this.radius, 2) * this.height)/3;
        this.vol.toFixed(4);        
        console.log(`Vol of Cone: ${this.vol.toFixed(4)}`);
    }
}


let cylinder = new Cylinder(2.75, 2.26);
cylinder.getVolume();

let sphere = new Sphere(12.7);
sphere.getVolume();

let cone = new Cone(10, 5.25);
cone.getVolume();