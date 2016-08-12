function fibonacci(num) {
	if (num < 0) {
		return "Error: Number must be a positive integer.";
	} else if (num == 0) {
		return 0;
	}

	var previous = 0;
	var current = 1;

	for (var i = 1; i < num; i++){
		var temp = current;
		current += previous;
		previous = temp;
	}
	return current;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
