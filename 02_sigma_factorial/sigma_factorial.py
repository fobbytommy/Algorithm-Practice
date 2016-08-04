# Practice 1
# 8/4/2016

"""	Sigma
	Implement a function sigma(n) that , given a number n, returns the sum
	of all positibe integers from 1 up to n (inclusive).
	For example, sigma(3) = 1+2+3; sigma(5) = 1+2+3+4+5. """

def sigma(num):
	if num < 0: # if number is less than 0; therefore, negative, return a warning
		return "The given argument must be positive integer."
	sig = 0;
	for n in range(1, num+1):
		sig += n
	return sig
# sigma_result = sigma(1)
# print(sigma_result)

# =========================================================================== #
"""	Factorial
	Write a function factorial() that, given a number n, returns the product
	(multiplication) of all positive integers from 1 up to n (inclusive).
	For example, factorial(3) = 1*2*3; factorial(5) = 1*2*3*4*5. """
def factorial(num):
	if num < 0: # if number is less than 0; therefore, negative, return a warning
		return "The given argument must be postive integer."
	fact = 1
	for n in range(1, num+1):
		fact *= n
	return fact
# factorial_result = factorial(5)
# print(factorial_result)
