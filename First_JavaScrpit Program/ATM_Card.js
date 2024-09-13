function atmCardValidator(cardNumber){

	if(cardNumber.length != 19){
		return false;
	}
	else if(cardNumber.charAt(0) != "4" & cardNumber.charAt(0) != "5" & cardNumber.charAt(0) != "6"){
		return false;
	} 
	else if(cardNumber.charAt(4) != "-" & cardNumber.charAt(9) != "-" & cardNumber.charAt(14) != "-"){
		return false;
	}
	
		var temp = ""
		for(var count = 0;  count < cardNumber.length; count++){
			if(cardNumber.charAt(count) != "-"){
				temp = temp + '' + cardNumber.charAt(count);
			}
		}
		console.log(temp);
		let counter = 0;
		let temps = 0;
		for(let i=0;i<temp.length;i++){
			temps = parseInt(temp[i]);
			if(typeof(temps) != typeof(1)){
				console.log(typeof(temps));
				return false;
			}
			else{
				counter ++;
			}
		}
console.log(counter);
if(counter == 16)
return true;
}



console.log(atmCardValidator("4734-5678-9012-345h"));