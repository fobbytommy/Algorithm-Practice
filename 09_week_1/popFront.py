#popFront
def popFront(arr):

	first_val = arr[0]

	for idx in range(1, len(arr)):
		arr[idx-1] = arr[idx]

	arr.pop() # funny how this takes an argument (index) to be popped!

	return first_val

arr = [1, 2, 3, 4, "Hello", "Hi", 5]
print(popFront(arr))
print(arr)
