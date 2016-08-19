arr = [1, 'hello', 5, 'yo'];

def findVal(arr, val):
	for data in arr:
		if data == val:
			return True
	return False

result = findVal(arr, 5)
print(result)
