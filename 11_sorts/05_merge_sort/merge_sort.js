function merge_sort(arr) {

	if (arr.length < 2) {
		return arr;
	}

	var midpoint = Math.floor(arr.length / 2);
	var left = arr.slice(0, midpoint);
	var right = arr.slice(midpoint, arr.length);

	return merge(merge_sort(left), merge_sort(right));
}

function merge(left, right) {
	var sorted_list = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			sorted_list.push(left.shift());
		}
		else {
			sorted_list.push(right.shift());
		}
	}
	while (left.length) {
		sorted_list.push(left.shift());
	}
	while (right.length) {
		sorted_list.push(right.shift());
	}

	return sorted_list;
}

var arr = [5, 13, 6, 1, 4, 2, 12, 33, -2, 52, -6, 22, 12, 3, 390, 20, -3, 14, 659, 3, 0, 9];
console.log(merge_sort(arr));
