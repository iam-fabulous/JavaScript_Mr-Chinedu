function sumEvenNumbers(arr){
	let evenNumbers = 0;
	for(let number of arr){
		if(number % 2 == 0)
		evenNumbers += number;
	}
return evenNumbers;
}

function findMax(arr){
	let maxNumber = 0;
	for(let number of arr){
		if(number > maxNumber)
		maxNumber = number;
	}
return maxNumber;
}

function countOddNumbers(arr){
	let oddNumbers = 0;
	for(let number of arr){
		if(number % 2 == 1)
		oddNumbers++
	}
return oddNumbers;
}

function isPrime(number){
	let count = 1;
	while(count <= number){
		if(number % 2 == 0 && count != 1){
			return false;
		}
	count ++;
	}
return true;
}

function findFirstDuplicate(arr){
	length = arr.length;
	let defaultValue = -1;
	for(let count = 0; count < length; count++){
		for(let number = count +1; number < length; number++){
			if(arr[count] == arr[number]){
				defaultValue = arr[number];
				return defaultValue;
			}
		}
		
	}
return defaultValue;
}

function reverseArray(arr){
	let newArray = [];
	counter = arr.length-1;
	for(let count = 0; count <= length; count++){
		newArray[count] = arr[counter];
		counter--;
	}
return newArray;
}

function factorial(number){
	let counter = number;
	let factorialValue = number;
	for(let count = 0; count <= number; count++){
		counter--;
		if(counter < number && counter > 0){
			factorialValue *= counter;
		}
	
	}
return factorialValue;
}

function sumMultiplesOfThreeAndFive(number){
	let sumOfMultiples = 0;
	for(let count = 0; count < number; count++){
		if(count / 3 == 5 && count / 5 == 3){
			sumOfMultiples += count;
		}
	}
return sumOfMultiples;
}

module.exports = {sumEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate, reverseArray, factorial, sumMultiplesOfThreeAndFive};// wrapping the functions inside an object