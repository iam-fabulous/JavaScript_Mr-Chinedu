const {add, subtract, evenNumbers} = require("./play_ground.js");
//require() its importing the file as an object;
//{add, subtract} -- destructuring the functions
let numberOne = 2;
let numberTwo = 29;

test("Add two number", ()=>{
	let result = add(numberOne, numberTwo);
	expect(result).toBe(31);

})

test("subtract two numbers", ()=>{
	let result = subtract(numberTwo, numberOne);
	let expected = 27;
	expect(result).toBe(expected);
})

test("return evenNumbers", ()=>{
	let arrayOfNumbers = [1,2,3,4,5,6];
	let result = evenNumbers(arrayOfNumbers);
	expect(result).toEqual([2,4,6]);
})