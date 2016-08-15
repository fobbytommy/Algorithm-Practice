# pushFront
def pushFront(arr, val):

	arr.append(0)
	for idx in range(len(arr)-1, 0, -1):
		arr[idx] = arr[idx-1]
	arr[0] = val


arr = [1,"sweet", 65]
pushFront(arr, 5)
print(arr)
