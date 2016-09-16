def selection_sort(arr):
	array_length = len(arr)

	for i in range(array_length):
		select = i
		for j in range(i + 1, array_length):
			if arr[j] < arr[select]:
				select = j

		# swapping value with the selection
		arr[i], arr[select] = arr[select], arr[i]


arr = [11, 3, 4, 2, 8, -3, 6, 12, -2, 10, 0, 5]
selection_sort(arr)
print(arr)
