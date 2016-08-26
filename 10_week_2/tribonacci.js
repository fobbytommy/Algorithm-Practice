var tribonacci = [0, 0, 1];

function tricky_tribonacci(num) {
	if (num < 0) {
		return null;
	}

	while (tribonacci.length <= num) {
		var previous2 = tribonacci[tribonacci.length - 3];
		var previous1 = tribonacci[tribonacci.length - 2];
		var current = tribonacci[tribonacci.length - 1];

		tribonacci.push(previous2 + previous1 + current);
	}

	return tribonacci[num];
}

console.log(tricky_tribonacci(9));
