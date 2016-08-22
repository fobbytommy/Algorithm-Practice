// Given an array, return the second-to-last element

function second_to_last(arr) {
	if (arr.length < 2) {
		return null;
	}
	return arr[arr.length-2];
}

var arr = [1, 2, "this should be returned", 4];
// var arr = ["should return null"];

console.log(second_to_last(arr));
