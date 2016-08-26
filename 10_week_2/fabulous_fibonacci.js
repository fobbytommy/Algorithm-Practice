var fibonacci = [0, 1];

function fabulous_fibonacci(num) {
	if (num < 0) {
		return null;
	}

	while (fibonacci.length <= num) {
		var current = fibonacci[fibonacci.length-1];
		var previous = fibonacci[fibonacci.length-2];
		fibonacci.push(previous + current);
	}

	return fibonacci[num];
}

console.log(fabulous_fibonacci(9));
