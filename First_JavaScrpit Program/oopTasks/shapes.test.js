const{Rectangle} = require("./shapes.js")

test("test that rectangle can calculate area", ()=>{
    let rectangle = new Rectangle("rectangle",8,5);
    let result = rectangle.getArea();
    expect(result).toBe("The area of the rectangle is : 40");
})

test("test that rectangle can check if a shape is not squarish", ()=>{
    let rectangle = new Rectangle("rectangle",8,5);
    let result = rectangle.isSquare();
    expect(result).toBe("This shape is not Squarish");
})

test("test that rectangle can check if a shape is not squarish", ()=>{
    let rectangle = new Rectangle("rectangle",8,8);
    let result = rectangle.isSquare();
    expect(result).toBe("This shape is Squarish");
})