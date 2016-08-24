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
