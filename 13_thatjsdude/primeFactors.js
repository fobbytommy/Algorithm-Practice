function primeFactors(num) {
	var prime_factors = [];
	var divisor = 2;

	while (num > 1) {
		if (num % divisor == 0) {
			prime_factors.push(divisor);
			num /= divisor;
		}
		else {
			// if a num is divisible by any even number,
			// it would be divisible by 2.
			if (divisor >= 3) {
				divisor += 2;
			}
			else {
				divisor++;
			}
		}
	}

	return prime_factors;
}

var result = primeFactors(1000);
console.log(result);
