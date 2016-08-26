var sumArr = [0];

function smarter_sum(num) {
	if (num < 0) {
		return null;
	}
	while (sumArr.length <= num) {
		sumArr.push(sumArr[sumArr.length - 1] + sumArr.length);
	}
	return sumArr[num];
}

console.log(smarter_sum(3));
