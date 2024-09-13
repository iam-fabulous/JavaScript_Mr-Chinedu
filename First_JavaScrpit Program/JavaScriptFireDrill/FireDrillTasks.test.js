const {sumEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate, reverseArray, factorial, sumMultiplesOfThreeAndFive} = require("./FireDrillTasks.js");



test("Sum Even Numbers in Array", ()=>{
	let arrayOfNumbers = [1,2,3,4,5,6];
	let result = sumEvenNumbers(arrayOfNumbers);
	expect(result).toBe(12);

})

test("Find the Largest Number in Array", ()=>{
	let arrayOfNumbers = [1,2,3,7,5,6];
	let result = findMax(arrayOfNumbers);
	expect(result).toBe(7);
})

test("Count The Odd Numbers in Array", ()=>{
	let arrayOfNumbers = [1,2,3,4,5,6,7];
	let result = countOddNumbers(arrayOfNumbers);
	expect(result).toBe(4);
})

test("check if Number is Prime", ()=>{
	let number1 = 5;
	let number2 = 6;
	expect(isPrime(number1)).toBe(true);
	expect(isPrime(number2)).toBe(false);
	
})

test("find Duplicate Element in Array", ()=>{
	let arrayOfNumbers = [1,8,3,3,2,4,2,8,5,8,2];
	let result = findFirstDuplicate(arrayOfNumbers);
	expect(result).toEqual(3);
})

test("findFirstDuplicate Function Returns -1 If No Duplicate Element in Array", ()=>{
	let arrayOfNumbers = [1,2,3,4,5];
	let result = findFirstDuplicate(arrayOfNumbers);
	expect(result).toEqual(-1);
})

test("Reverse The Elements Of An Array",()=>{
	let arrayOfNumbers = [1,2,3,4,5];
	let result = reverseArray(arrayOfNumbers);
	expect(result).toEqual([5,4,3,2,1]);
})

test("Returns Factorial Of a Number",()=>{
	let number = 5;
	let result = factorial(number);
	expect(result).toBe(120);
})

test("Calculate The Multiples Of 3 and 5 Below a Given Number", ()=>{
	let number = 25;
	let result = sumMultiplesOfThreeAndFive(number);
	expect(result).toBe(15);
})


