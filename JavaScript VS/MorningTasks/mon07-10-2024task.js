function twoMaxNumber(array){
    let newArray = [];
    let firstMaxNumber = 1;
    let secondMaxNumber = 0;
    length = array.length;
    for(let row = 0; row < length; row++){
        for(let column = 0; column < length; column++){
            if(array[row] > array[column]){
                firstMaxNumber = array[row];
                secondMaxNumber = array[column]
            }
            if(secondMaxNumber < firstMaxNumber && secondMaxNumber > array[row]){
                secondMaxNumber = array[row];
            }
        }
    }
    newArray.push(firstMaxNumber);
    newArray.push(secondMaxNumber);

    return newArray;
}

module.exports = {twoMaxNumber};

console.log(twoMaxNumber([2,3,5,1,7]));