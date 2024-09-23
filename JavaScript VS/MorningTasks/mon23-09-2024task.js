function sortElements(array){
    const numbers = {};
    count = 0;
    length = array.length;
    for(let row = 0; row < length; row++){
        numbers[array[row]] = 1;
        if(array[row] in numbers && numbers[array[row]] == 1)
            numbers[array[row]] += 1;
    }
return numbers;
}

module.exports = {sortElements};

console.log(sortElements([1,1,2,3,2]));