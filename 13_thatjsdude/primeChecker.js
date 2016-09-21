function primeChecker(num) {
	if (num <= 1) { // if negative number or 0 or 1, its not a prime number
		return false;
	}
	var count = 0;
	for (var i = 2; i <= num; i++) {
		if (num % i == 0) { // if divisible by i, increment count
			count++;
		}
		if (count > 1) { // if count is more than 1, that is not a prime number
			return false;
		}
	}
	return true;
}

console.log(primeChecker(9973));
