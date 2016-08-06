"""
Generate Coin Change:

Implement a function generateCoinChange() that accepts a parameter for
the number of cents, and computes how to represent that amount with the
smallest number of coins. Console.log the result.
"""
def generateCoinChange(cents):
	quarter = 0
	dime = 0
	nickel = 0
	penny = 0

	if cents / 25 != 0:
		quarter = cents / 25
		cents -= (quarter * 25)
	if cents / 10 != 0:
		dime = cents / 10
		cents -= (dime * 10)
	if cents / 5 != 0:
		nickel = cents / 5
		cents -= (nickel * 5)
	penny = cents

	result = "quarter: {}\ndime: {}\nnickel: {}\npenny: {}".format(quarter, dime, nickel, penny)

	print(result)

generateCoinChange(30)
