/*
Generate Coin Change:

Implement a function generateCoinChange() that accepts a parameter for
the number of cents, and computes how to represent that amount with the
smallest number of coins. Console.log the result.
*/
function generateCoinChange(cents) {
	var quarter = 0;
	var dime = 0;
	var nickel = 0;
	var penny = 0;
	if (Math.floor(cents / 25) > 0) {
		quarter = Math.floor(cents / 25);
		cents -= (quarter*25);
	}
	if (Math.floor(cents / 10) > 0) {
		dime = Math.floor(cents / 10);
		cents -= (dime*10);
	}
	if (Math.floor(cents / 5) > 0) {
		nickel = Math.floor(cents / 5);
		cents -= (nickel*5);
	}
	penny = cents;

	console.log("quarter: ", quarter);
	console.log("dime: ", dime);
	console.log("nickel: ", nickel)
	console.log("penny: ", penny);
}

generateCoinChange(99);
