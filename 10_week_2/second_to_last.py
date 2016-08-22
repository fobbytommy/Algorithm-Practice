# Given an array, return the second-to-last element.

def second_to_last(arr):
	return arr[len(arr)-2]

arr = [1, 2, "this should be returned", 4]
print(second_to_last(arr))
