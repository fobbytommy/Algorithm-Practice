function selection_sort(arr) {

	var array_length = arr.length;

	for (var i = 0; i < array_length; i++) {
		var select = i;
		for (var j = i + 1; j < array_length; j++) {
			if (arr[j] < arr[select]) {
				select = j;
			}
		}
		var temp = arr[i];
		arr[i] = arr[select];
		arr[select] = temp;
	}

}

var arr = [11, 3, 4, 2, 8, -3, 6, 12, -2, 10, 0, 5];
selection_sort(arr);
console.log(arr);
