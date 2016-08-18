arr = [1, -2, 2, -3, -3, 3, 4, -5, -3, -5, 5, -3,-3, 6, -3,-3,-3]

def removeNegatives(arr):
	negativeFound = 0;
	for idx in range(len(arr)):
		if arr[idx] >= 0:
			arr[idx - negativeFound] = arr[idx]
		else:
			negativeFound += 1

	while (negativeFound):
		arr.pop()
		negativeFound -= 1


removeNegatives(arr)
print(arr)
