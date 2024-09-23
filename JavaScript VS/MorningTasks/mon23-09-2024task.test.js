const{sortElements} = require("./mon23-09-2024task");

test("sorts the elements in an array and increases the value by its occurrence!", ()=>{
    let arrayOfNumbers = [1,1,2,3,2];
    let result = sortElements(arrayOfNumbers);
    expect(result).toBe({"1" : 2, "2" : 2, "3" : 1})
})