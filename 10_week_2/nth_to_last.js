// return the element that is N-from-array's-end.

function nth_to_last(arr, n) {
	if ((arr.length - n < 0) || (n <= 0)) {
		return null;
	}
	return arr[arr.length - n];
}


var arr = [1, 2, 3, 4, 5, 6];
var result = nth_to_last(arr, 2);
console.log(result);
