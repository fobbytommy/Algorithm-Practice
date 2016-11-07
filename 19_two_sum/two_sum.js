function twoSum(arr, target) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			if (arr[i] + arr[j] == target && i !== j) {
				return [i, j];
			}
		}
	}
}

var arr = [3, 2, 15, 7];

console.log(twoSum(arr, 9));
