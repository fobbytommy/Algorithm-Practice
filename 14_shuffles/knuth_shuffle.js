// Fisher-Yates (aka Knuth) Shuffle
function knuth_shuffle(arr) {
	var currentIndex = arr.length;
	var randomIndex, temp;

	while(currentIndex > 0) {
		// get a random index from the current index
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// swap those two elements
		temp = arr[currentIndex];
		arr[currentIndex] = arr[randomIndex];
		arr[randomIndex] = temp;
	}

	return arr;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
knuth_shuffle(arr);
console.log(arr);
