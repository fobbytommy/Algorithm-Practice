// bubble sort!

function bubble_sort(arr) {
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

var arr = [5, 3, 6, 1, 4, 2, 2, 3, -2, 5, 6, 10, 2, 390, 20, 3, 2, 659, 3, 0, 9];
bubble_sort(arr);
console.log(arr);
