#	insertAt
arr = [1, 2, 4, 5]

def insertAt(arr, index, val):
	idx = len(arr)
	arr.append(0) # to prevent IndexError: list assignment index out of range
	if index < 0:
		index = 0
	elif index > idx:
		index = idx
	for i in range(idx, index, -1):
	 	arr[i] = arr[i-1]
	arr[index] = val


insertAt(arr, 2, 3)
print(arr)
