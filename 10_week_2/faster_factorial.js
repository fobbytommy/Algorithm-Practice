var fact = [1];

function faster_factorial(num) {
	if (num < 0) {
		return null;
	}
	while (fact.length <= num){
		fact.push(fact[fact.length-1] * fact.length);
	}

	return fact[num];
}

console.log(faster_factorial(7));
