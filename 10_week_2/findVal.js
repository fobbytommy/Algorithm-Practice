var arr = [1, 'hello', 5, 'yo'];

function findVal(arr, val) {
	for (var i = 0, j = arr.length; i < j; i++) {
		if (arr[i] === val) {
			return true;
		}
	}
	return false;
}

var result = findVal(arr, 5);
console.log(result);
