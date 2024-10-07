class Shape{
    #name 
     
     constructor(name, width, height){
         this.#name = name;
         this.width = width;
         this.height = height;
     }
 
     getName(){
         return `Shape name: ${this.name}`
     }
 }

class Rectangle extends Shape{
    constructor(name, width, height){
        super(name,width,height);
    }

    getArea(){
        let area = this.width * this.height;
        return `The area of the rectangle is : ${area}`;
    }
    isSquare(){
        return this.height == this.width ? "This shape is Squarish" : "This shape is not Squarish"
    }
   
}






module.exports = {Rectangle}