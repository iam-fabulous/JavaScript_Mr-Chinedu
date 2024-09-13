function OddAndEvenCount(list){
	let myList = [];
	myList.length = 2;
	let even = 0;
	let odd = 0;
	for(let count = 0; count < list.length; count++){
			check = list[count];
		if(check % 2 == 0){
			even += 1;
			myList[0]=(even);
		}
		else{
			odd += 1;
			myList[1]=(odd);
		}
	}
return myList;
}


list = [4,1,5,7,9];
console.log(OddAndEvenCount(list));