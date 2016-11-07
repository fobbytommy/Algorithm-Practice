function Interval(a, b) {
	this.start = a;
	this.end = b;
}

function merge(intervals) {
	if (intervals.length < 2) {
		return intervals;
	}
	//sorted before comparing to merge
	intervals.sort(function(a, b) {
		if (a.start < b.start) {
			return -1;
		}
		else if (a.start > b.start) {
			return 1;
		}
		else {
			return 0;
		}
	});

	var result = [];

	var previous = intervals[0];
	for (var i = 1; i < intervals.length; i++) {
		var current = intervals[i];
		if (previous.end >= current.start) {
			var mergeInterval = new Interval(previous.start, Math.max(previous.end, current.end));
			previous = mergeInterval;
		}
		else {
			result.push(previous);
			previous = current;
		}
	}
	result.push(previous);

	return result;
}

var test = [new Interval(1, 3),new Interval(8, 10), new Interval(15, 18), new Interval(2, 6)];

console.log(merge(test));
