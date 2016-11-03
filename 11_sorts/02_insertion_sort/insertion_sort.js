var arr  = [3, 5, 2, 4, 6, 1];

function insertion_sort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var element = arr[i];
		var j = i;
		while (j > 0 && arr[j - 1] > element) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = element;
	}
}

insertion_sort(arr);
console.log(arr);
