# bubble sort

def bubble_sort(arr):
	list_length = len(arr)
	if list_length < 2:
		return None;
	while list_length > 0:
		for idx in range(1, list_length):
			if arr[idx-1] > arr[idx]:
				arr[idx-1], arr[idx] = arr[idx], arr[idx-1]
		list_length -= 1

arr = [5, 3, 6, 1, 4, 2, 2, 3, -2, 5, 6, 10, 2, 390, 20, 3, 2, 659, 3, 0, 9]
bubble_sort(arr)
print(arr)
