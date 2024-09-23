function sumPairElements(array){
    let newArray = [];
    sum = 0;
    length = array.length;
    if(length % 2 == 1)
        newArray.push(array[length - 1]);
    else{
        for(let row = 0; row <= length; row++){
          if(row % 2 == 1){
              sum = array[row] + array[row - 1];
             newArray.push(sum);
            }
        }
    }
return newArray;
}

module.exports = {sumPairElements};