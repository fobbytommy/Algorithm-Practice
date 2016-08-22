# divide and conquer

def binarySearch(arr, val):
	startIdx = 0
	endIdx = len(arr)
	while endIdx > startIdx:
		midIdx = (startIdx + endIdx) / 2
		if val > arr[midIdx]:
			startIdx = midIdx + 1
		elif val < arr[midIdx]:
			endIdx = midIdx
		else:
			return True
	return False

arr = [1, 2, 3, 4, 5, 6, 7, 8]
result = binarySearch(arr, 3)
print(result)
