arr1 = ["abc", 3, "yo"]
arr2 = [42, "wassup", True]

def arrays_to_map(arr1, arr2):
	map = {}
	if len(arr1) != len(arr2):
		return None

	for i in range(len(arr1)):
		map[arr1[i]] = arr2[i]

	return map

result = arrays_to_map(arr1, arr2)
print(result)
