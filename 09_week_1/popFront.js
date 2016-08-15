/*	popFront	*/
function popFront(arr) {
	var first_val = arr[0];

	for (var i = 0, j = arr.length-1; i < j; i++) {
		arr[i] = arr[i+1];
	}
	arr.pop();

	return first_val;
}

var arr = [1,2,3,4];
console.log(popFront(arr));
console.log(arr);
