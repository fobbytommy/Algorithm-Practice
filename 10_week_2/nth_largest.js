// Given an array, return the Nth-largest element

function nth_largest(arr, n) {
	var array_length = arr.length;

	if (n <= 0 || array_length < n) {
		return null;
	}
	var sorted_arr = arr;
	require('bubble_sort')(sorted_arr);

	return sorted_arr[array_length - n];
};


var arr = [23, 32, -2 , 6 ,2 ,7, 10, 3, 10, 22, 3, -1, 19, 24, 33];
var result = nth_largest(arr, 3);
console.log(result);
