/* 	The Basic 13  */

/* 	1. Print 1 - 255
 	   Print all the integers from 1 to 255  */
function print255() {
	for (var i = 1; i <= 255; i++) {
		console.log(i);
	}
}
// print255();


/*	2. Odds 1 - 255
	   Print all odd intergers from 1 to 255  */
function odds255() {
	for (var i = 1; i <= 255; i++) {
		if (i % 2 == 1){
			console.log(i);
		}
	}
}
// odds255();


/*	3. Print Sum 0 - 255
	   Print integers from 0 to 255, and the sum so far.  */
function sum255() {
	var sum = 0;
	for (var i = 0; i <= 255; i++) {
		sum += i;
	}
	return sum;
}
// sum255();


/*	4. Iterate Array
	   Print all values in a given array.  */
function itr_array(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
// itr_array([1,2,3]);


/*	5. Find Max
	   Print the largest element in a given array.  */
function find_max(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max
}
// find_max([1,2,3,8,-3)]);


/*	6. Get Average
	   Analyze an array's value and print the average.  */
function get_avg(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	var avg = sum / arr.length;
	return avg;
}
// get_avg([1,2,3,4]);


/*	7. Array with Odds
	   Create an array with odd integers from 1-255.  */
function array_odds_255() {
	var arr = [];
	for (var i = 1; i <= 255; i++) {
		if (i % 2 == 1) {
			arr.push(i);
		}
	}
	return arr;
}
// array_odds_255();


/*	8. Squeare the Values
  	   Given an array, square each value in the array.  */
function sqr_values(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] *= arr[i];
	}
	return arr;
}
// sqr_values([2,3,4]);


/*	9. Greater Than Y
	   Count the number of array values greater than a given value Y.  */
function greater_than_y(arr, y) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > y) {
			count++;
		}
	}
	return count;
}
// greater_than_y([2,3,0], 1);


/*	10. Zero Out Negative Numbers
	    Set negative array values to zero.  */
function zero_out_negative(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		}
	}
	return arr;
}
// zero_out_negative([-1,2,3,-5]);


/*	11. Max, Min, Average
		Given an array, create a new array with max, min, and average values.  */
function max_min_avg(arr) {
	var max = arr[0];
	var min = arr[0];
	var sum = arr[0];
	var avg, new_arr;
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}
	avg = sum / arr.length;
	new_arr = [max, min, avg];
	return new_arr;
}
// max_min_avg([1,2,3,4]);


/*	12. Shift Array Values
 		Given an array, shift all values forward, dropping the
		first value and leaving an extra '0' value at the end.  */
function shift_array(arr) {
	for (var i = 1; i < arr.length; i++) {
		arr[i-1] = arr[i];
	}
	arr[arr.length-1] = 0;
	return arr;
}
// shift_array([1,2,3,4]);


/*	13. Number to String
 		Replace any negativate values in an array with 'Dojo'.  */
function num_to_str(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 'Dojo';
		}
	}
	return arr;
}
// num_to_str([-1,3,0,-1,-2]);
