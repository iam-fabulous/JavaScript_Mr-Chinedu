// const { count } = require("yargs");

function findScores(array){
   let testScores = [];
   testScores = array.filter((number) => number >= 70);
   return testScores;
}

function increaseElementByFive(array){
    let testScores = [];
    testScores = array.map((number) => number + 5);
   return testScores;
}

function squareElements(array){
    let testScores = [];
    testScores = array.map((number) => number ** 2);
   return testScores;
}

function createObject(name, book){
    let count = 0;
    const distribute = {};
    for(let value of name){
        distribute[name[count]] = book[count];
        count++;
    }
return distribute;
}

function sumValues(object){
    let totalAmountSpent = 0;
    for(let key in object){
        totalAmountSpent += object[key];
    }
    return totalAmountSpent;
}
module.exports = {findScores, increaseElementByFive, squareElements,createObject, sumValues};


let name = ["Emily", "Jack", "Daniel"];
let book = ["MyBook", "YourBook", "OurBook"];

console.log(createObject(name,book));