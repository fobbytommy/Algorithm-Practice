var arr = [-5, 1, -1 ,-1, 2, -3, 3, -5, 4, -7, 5, -3, -2, -3, -4, -5];

function removeNegatives(arr) {
	for (var i = 0, j = arr.length; i < j; i++) {
		if (arr[i] < 0) {
			removeAt(arr, i);
			j = arr.length;
			i--;
		}
		// console.log(j);
	}
}

function removeAt(arr, index) {
	for (var j = arr.length-1; index < j; index++) {
		arr[index] = arr[index+1]
	}
	arr.pop();
}

removeNegatives(arr);
console.log(arr);
