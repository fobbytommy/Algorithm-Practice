function radix_sort(arr) {
	var array_length = arr.length;
	var remainder = 10;
	var divisor = 1;

	while (true) {
		var basket = [[], [], [], [], [], [], [], [], [], []];
		for (var i = 0; i < array_length; i++) {
			var index = arr[i] % remainder;
			index = Math.floor(index / divisor);
			basket[index].push(arr[i]);
		}
		remainder *= 10;
		divisor *= 10;

		if (basket[0].length == array_length) {
			return basket[0];
		}
		var arr = [];
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < basket[i].length; j++) {
				arr.push(basket[i][j]);
			}
		}
	}
}

var arr = [54, 23, 12, 5, 17];
console.log(radix_sort(arr));
