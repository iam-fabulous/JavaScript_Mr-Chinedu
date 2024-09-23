const{findScores, increaseElementByFive, squareElements, createObject, sumValues} = require("./myClassTasks");

test("find scores that are greater than or equal to 70", ()=>{
    let arrayOfNumbers = [70, 40, 89, 30, 71, 23, 90, 56, 79, 32];
    let result = findScores(arrayOfNumbers);
    expect(result).toEqual([70, 89, 71, 90, 79]);
})

test("Add 5 to each elements in an array", ()=>{
    let arrayOfNumbers = [85, 92, 78, 88, 95];
    let result = increaseElementByFive(arrayOfNumbers);
    expect(result).toEqual([90, 97, 83, 93, 100]);
})

test("square each elements in an array", ()=>{
    let arrayOfNumbers = [2,4,6,8,10];
    let result = squareElements(arrayOfNumbers);
    expect(result).toEqual([4,16,36,64,100]);
})

test("create an object with two arrays", ()=> {
    let name = ["Emily", "Jack", "Daniel"];
    let book = ["MyBook", "YourBook", "OurBook"];
    let result = createObject(name,book);
    expect(result).toEqual({"Emily" : "MyBook", "Jack" : "YourBook", "Daniel" : "OurBook"});
})

test("Calculate the sum of all the values in an object", ()=> {
    const expense = {"groceries": 150, "diningOut": 100, "transportation": 50, "entertainment": 80};
    let totalAmountSpent = sumValues(expense);
    expect(totalAmountSpent).toBe(380);
})

// test("")