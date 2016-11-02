// bubble sort!

function bubble_sort_1(arr) {
	var array_length = arr.length;
	if (array_length < 2) {
		return null;
	}
	while (array_length > 0) {
		for (var i = 1; i < array_length; i++) {
			if (arr[i-1] > arr[i]) {
				var temp = arr[i-1];
				arr[i-1] = arr[i];
				arr[i] = temp;
			}
		}
		array_length--;
	}
}

function bubble_sort_2(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

function bubble_sort_3(arr) {
	var count = 0;
	do {
		var swapped = false;
		for (var i = 1 ; i < arr.length - count; i++) {
			if (arr[i - 1] > arr[i]) {
				var temp = arr[i - 1];
				arr[i - 1] = arr[i];
				arr[i] = temp;
				// arr[i - 1] = [arr[i], arr[i] = arr[i - 1]][0];
				swapped = true;
			}
		}
		count++;

	} while (swapped === true);
}

var arr = [5, 3, 6, 1, 4, 2, 14, -10, -2, 5, 6, 10, 2, 390, 20, 7, 2, 659, 3, 0, 9];
// bubble_sort_1(arr);
// bubble_sort_2(arr);
bubble_sort_3(arr);
console.log(arr);
