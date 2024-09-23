const{sumPairElements}= require("./wed19-09-24task.js");

test("Sum Elements In Twos in An Array", ()=> {
    let arrayOfNumbers = [2,3,4,5,6,7];
    let result = sumPairElements(arrayOfNumbers);
    expect(result).toEqual([5,9,13])
})

test("Test If sumPairElements Function Returns Last Element If Array Length Is Odd", ()=>{
    let arrayOfNumbers = [1,2,3,4,5,6,7];
    let result = sumPairElements(arrayOfNumbers);
    expect(result).toEqual([7]);
})