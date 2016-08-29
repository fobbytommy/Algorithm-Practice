var arr1 = ["abc", 3, "yo"];
var arr2 = [42, "wassup", true];

function arrays_to_map(arr1, arr2) {
	var map = {};
	if (arr1.length != arr2.length) {
		return null;
	}
	for (var i = 0; i < arr1.length; i++) {
		map[arr1[i]] = arr2[i];
	}
	return map;
}

var result = arrays_to_map(arr1, arr2);
console.log(result);
