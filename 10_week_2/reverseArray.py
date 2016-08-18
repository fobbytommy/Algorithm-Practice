arr = [1, 2, 3, 4, 5, 6, 7, 8]

def reverseArray(arr):
	j = len(arr)
	for idx in range(0, j/2, 1):
		# do not need temp variable for python
		arr[idx], arr[j-1-idx] = arr[j-1-idx], arr[idx]

reverseArray(arr)
print(arr)
