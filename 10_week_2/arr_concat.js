function arr_concat(arr1, arr2) {

	var new_arr = [];

	for (var i = 0, j = arr1.length; i < j; i++) {
		new_arr.push(arr1[i]);
	}
	for (var i = 0, j = arr2.length; i < j; i++) {
		new_arr.push(arr2[i]);
	}

	return new_arr;
}

var arr1 = [1, 2];
var arr2 = [3, 4];

var new_array = arr_concat(arr1, arr2);
console.log(new_array);
