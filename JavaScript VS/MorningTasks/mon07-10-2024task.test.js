const{twoMaxNumber} = require("./mon07-10-2024task");

test("get the first two largest numbers in the array", ()=>{
    let arrayOfNumbers = [2,3,5,1,7];
    let result = twoMaxNumber(arrayOfNumbers);
    expect(result).toEqual([7,5]);
})