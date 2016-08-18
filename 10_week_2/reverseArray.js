var arr = [1, 2, 3, 4, 5, 6, 7, 8];

function reverseArray(arr) {
	var temp;
	for (var i = 0, j=(arr.length-1); i < j/2; i++) {
		temp = arr[i];
		arr[i] = arr[j-i];
		arr[j-i] = temp;
	}
}

reverseArray(arr);
console.log(arr);
