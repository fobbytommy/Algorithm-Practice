/*
Threes and Fives:

Add all the values from x and y (inclusive & defaults 100 and 4000000)
that are evenly divided by 3 or 5 but not both.
Display this value in the console.
*/
function three_five(x, y) {
	var x = x || 100;
	var y = y || 4000000;
	var start, end, sum = 0;

	if (x > y) {
		start = y;
		end = x;
	}
	else {
		start = x;
		end = y;
	}

	while (start <= end) {
		if (start % 3 == 0 ^ start % 5 == 0) {
			sum += start;
		}
		start++;
	}

	return sum;
}

console.log(three_five());
