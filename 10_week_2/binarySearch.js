// divide and conquer

function binarySearch(arr, val) {
	var startIdx = 0;
	var endIdx = arr.length;
	while(endIdx > startIdx) {
		var midIdx = Math.floor((startIdx + endIdx) / 2);
		if (val > arr[midIdx]) {
			startIdx = midIdx + 1;
		} else if (val < arr[midIdx]) {
			endIdx = midIdx;
		} else {
			return true;
		}
	}
	return false;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var result = binarySearch(arr, 3);
console.log(result);
