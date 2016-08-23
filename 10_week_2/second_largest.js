// given an array, return the second-largest element

function second_largest(arr) {
	if (arr.length < 2) {
		return null;
	}
	var max = arr[0], second_max;
	for (var i = 1, j = arr.length; i < j; i++) {
		if (max < arr[i]) {
			if (second_max == undefined) {
				second_max = max;
			}
			else if (second_max < max) {
				second_max = max;
			}
			max = arr[i];
		}
		else if (second_max == undefined) {
			second_max = arr[i];
		}
		else if (second_max < arr[i]) {
			second_max = arr[i];
		}
		// console.log("current max: ", max);
		// console.log("current second max: ", second_max);
	}
	return second_max;
}

var arr = [23, 32, -2 , 6 ,2 ,7, 10, 3, 10, 22, 3, -1, 19, 24, 33];
var result = second_largest(arr);
console.log(result);
