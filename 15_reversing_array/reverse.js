function reverse_array(arr) {
	var half_array = Math.floor(arr.length / 2);
	var array_length = arr.length;

	for (var i = 0; i < half_array; i++) {
		var temp = arr[i];
		arr[i] = arr[array_length - 1 - i];
		arr[array_length - 1 - i] = temp;
	}
	return arr;
}

var arr = [1, 2, 3, 4, 5, 6];
console.log(reverse_array(arr));
