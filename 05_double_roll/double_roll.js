/*
Statistics to Doubles

Implement a 'die' that randomly returns an integer between 1 and 6 inclusive.
Roll a pair of these dice, tracking the statistics until doubles are rolled.
Display the number of rolls, min, max, and average.
*/

function die(){


	var count = 0;
	var sum = 0;
	var min;
	var max;
	var avg;


	do {
		var roll_1 = Math.floor((Math.random() * 6)+1);
		var roll_2 = Math.floor((Math.random() * 6)+1);

		console.log(roll_1, roll_2);
		count++;
		sum += roll_1 + roll_2;

		if (min == undefined) {
			min = roll_1 + roll_2;
		}
		else if (roll_1 + roll_2 < min) {
			min = roll_1 + roll_2;
		}

		if (max == undefined) {
			max = roll_1 + roll_2;
		}
		else if (roll_1 + roll_2 > max) {
			max= roll_1 + roll_2;
		}

	} while(roll_1 != roll_2)


	avg = (sum / count).toFixed(1);
	result = ["rolls: " + count, "minimum: " + min, "maximum: " + max, "average: " + avg];

	return result;
}
console.log(die());
