var arr  = [3, 5, 2, 4, 6, 1];

function insertion_sort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var j = i;

		while (j > 0 && arr[j] < arr[j - 1]) {
			var temp = arr[j];
			arr[j] = arr[j - 1];
			arr[j - 1] = temp;

			j--;
		}
	}
}

insertion_sort(arr);
console.log(arr);
