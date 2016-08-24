# Given an array, return the Nth-largest element
from python_modules import bubble_sort


def nth_largest(arr, n):
	list_length = len(arr)

	if n <= 0 or list_length < n:
		return None

	sorted_arr = arr
	bubble_sort.bubble_sort(sorted_arr)

	return sorted_arr[list_length - n]


arr = [23, 32, -2 , 6 ,2 ,7, 10, 3, 10, 22, 3, -1, 19, 24, 33]
result = nth_largest(arr, 3)
print(result)
