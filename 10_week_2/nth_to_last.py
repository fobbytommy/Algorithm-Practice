# return the element that is N-from-array's-end.

def nth_to_last(arr, n):
	if len(arr) - n < 0 or n <= 0:
		return None;
	return arr[len(arr) - n]

arr = [1, 2, 3, 4, 5, 6]
result = nth_to_last(arr, 2)
print(result)
