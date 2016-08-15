/*	pushFront	*/
function pushFront(arr, val) {

	for (var j = arr.length; j > 0; j--) {
		arr[j] = arr[j-1];
	}
	arr[0] = val;
}

var arr = [3,4,"hello", [1,2, "hi"]];
pushFront(arr, "new_value");
console.log(arr);
