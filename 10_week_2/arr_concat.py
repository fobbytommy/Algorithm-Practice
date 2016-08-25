def arr_concat(arr1, arr2):
	new_arr = []

	for val in arr1:
		new_arr.append(val)
	for val in arr2:
		new_arr.append(val)

	return new_arr


arr1 = [1, 2]
arr2 = [3, 4]

new_list = arr_concat(arr1, arr2)
print(new_list)
