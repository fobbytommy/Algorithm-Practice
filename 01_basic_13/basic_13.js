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
	max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max
}
// find_max([1,2,3,8,-3)]);
