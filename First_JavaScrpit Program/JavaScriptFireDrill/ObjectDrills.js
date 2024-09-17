//Task One
const book = {
	title: 'The Great Gatsby',
	author: "F. Scott Fitzgerald",
	yearPublished: 1925
};

function print(book){

	const{title, author} = book;
	return title + " by " + author;
}

//Task Two
console.log(print(book));

const car = {

	make: "Toyota",
	model: "Camry",
	year: 2021
};

for(let key in car){
	
	console.log(key, car[key]);
}

//Task Three
const counter = {
	count: 0,
	step: 1,
	increament:function(){
	this.count += this.step;
	return this.count;
	}
}

function prints(counter){

	const{increament} = counter;
	result = counter.increament();
return result;
}

console.log(prints(counter));

//Task Four
const person = {
	firstName: "john",
	lastName: "Doe",
	fullName: function(){
		
		return this.firstName + " " + this.lastName;
	}
}

console.log(person.fullName());

//Task Five
const person1 = {
	firstName: "john",
	lastName: "Doe",
	age: 25
}

function myDetails(person1){

	const{firstName, lastName, age} = person1;
	result = "First Name: " + firstName + ", Last Name: " + lastName + ", Age: " + age;
return result;
}

console.log(myDetails(person1));