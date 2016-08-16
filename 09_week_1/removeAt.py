arr = [1, 2, 2.5, 3, 4]

def removeAt(arr, idx):
	removed_val = arr[idx]
	if idx < 0 or idx >= len(arr):
		return None
	for i in range(idx, len(arr)-1, 1):
		arr[i] = arr[i+1]
	arr.pop()	# remove the last value in the list
	return removed_val

print(removeAt(arr, 2))
print(arr)
