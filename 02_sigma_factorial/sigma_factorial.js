// Practice 1
// 8/4/2016

/*	Sigma
	Implement a function sigma(n) that , given a number n, returns the sum
	of all positibe integers from 1 up to n (inclusive).
	For example, sigma(3) = 1+2+3; sigma(5) = 1+2+3+4+5. */
function sigma(num) {
	if (num < 0) {
		return "The given argument must be positive integer.";
	}
	var sig = 0;
	for (var i = 1; i <= num; i++) {
		sig += i;
	}
	return sig;
}
var sigma_result = sigma(5);
console.log(sigma_result);

/* ========================================================================== */
/*	Factorial
	Write a function factorial() that, given a number n, returns the product
	(multiplication) of all positive integers from 1 up to n (inclusive).
	For example, factorial(3) = 1*2*3; factorial(5) = 1*2*3*4*5. */
function factorial(num) {
	if (num < 0) {
		return "The given argument must be positive integer.";
	}
	var fact = 1;
	for (var i = 1; i <= num; i++) {
		fact *= i;
	}
	return fact;
}
var factorial_result = factorial(5);
console.log(factorial_result);
