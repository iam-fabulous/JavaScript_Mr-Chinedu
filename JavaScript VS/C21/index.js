// let array = [1,2,3,"home", true];

// //console.log(array);

// let newArray = new Array(3);
// newArray[0] = 10;
// newArray.push(2);
// newArray.push(3);
// newArray.push(4);
// newArray.push(5);

//console.log(newArray);

// let result = Array.from(array);
//console.log(result);

// let answer = Array.of(1,2,3,4,5,6,7,8,9);
//console.log(answer);
                    //-4,-3,-2,-1
                    //0,1,2,3,4,5,6
// let arrayOfNumbers = [1,2,3,4,5,6,7];

// let slice = arrayOfNumbers.slice(2);
//console.log(slice);

// let arrayOfNumbers = [1,2,3,4,5,6,7];
// let arr = [7,4,5,9]
// let answer = arrayOfNumbers.splice(1,4,6,9,...arr);

// console.log(arrayOfNumbers);
// console.log(answer);

let arr = [3,4,5,6,7,8]
let fruits = ["banana", "orange","pears"];
// arr.forEach((element,index)=>{
//     let answer = element * 2;
//     console.log(answer);
//     console.log(index);
// })


//FILTER FUNCTION
function evenNumbers(arr){
    return arr.filter((number)=> number % 2 == 0);
}

function getFruitLength(array){
    let answer = array.filter((fruit) => fruit.length > 5);
    return answer;
}


// MAP FUNCTION

test("multiply numbers by two",()=>{

})
function multiplyByTwo(array){
    let result = array.map((number)=> number * 2);
    return result;
}

// test("map through an array of objects", ()=>{
//     let arr = [{name: "John", age: 25}, {name: "Jane", age: 24}];
//     let result = getNames(arr);
//     let expected = ["John", "Jane"];
//     expect(result).toEqual(expected)
// })

let getNames = (array)=>{
    return array.map((obj)=> obj.name)
}
