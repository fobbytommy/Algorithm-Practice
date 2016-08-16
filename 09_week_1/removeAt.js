var arr = [1, 2, 2.5, 3, 4];

function removeAt(arr, idx) {
	var removed_val = arr[idx];
	if (idx < 0 || idx >= arr.length) {
		return null;
	}
	for (var i = idx, j = arr.length-1; i < j; i++) {
		arr[i] = arr[i+1];
	}
	arr.pop(); // remove the last value
	return removed_val;
}
console.log(removeAt(arr, 2));
console.log(arr);
