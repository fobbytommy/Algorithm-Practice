/*	insertAt	*/

var arr = [1,2,4,5];

function insertAt(arr, index, val) {
	var i = arr.length;
	if (index < 0) {
		index = 0;
	}
	else if (index > i) {
		index = i;
	}
	for (i; i > index; i--) {
		arr[i] = arr[i-1];
	}
	arr[index] = val;
}
insertAt(arr, 2, 3);
console.log(arr);
