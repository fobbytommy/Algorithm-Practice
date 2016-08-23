# given an array, return the second-largest element

def second_largest(arr):
	if len(arr) - 2 < 0:
		return None
	max = arr[0]
	second_max = "undefined"
	for idx in range(1, len(arr)):
		if max < arr[idx]:
			if second_max == "undefined":
				second_max = max
			elif second_max < max:
				second_max = max
			max = arr[idx]
		elif second_max == "undefined":
			second_max = arr[idx]
		elif second_max < arr[idx]:
			second_max = arr[idx]
	return second_max

arr = [23, 32, -2 , 6 ,2 ,7, 10, 3, 10, 22, 3, -1, 19, 24, 33]
result = second_largest(arr)
print(result)
