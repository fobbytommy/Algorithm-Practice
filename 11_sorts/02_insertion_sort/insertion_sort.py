arr  = [3, 5, 2, 4, 6, 1]

def insertion_sort(arr):
	for idx in range(1, len(arr)):
		j = idx

		while j > 0 and arr[j] < arr[j - 1]:
			arr[j], arr[j - 1] = arr[j - 1], arr[j]

			j -= 1

insertion_sort(arr)
print(arr)
