""" The Basic 13 """

""" 1. Print 1 - 255
	   Print all the integers from 1 to 255. """
def print255():
	for i in range(1, 256):
		print(i)
# print255()


""" 2. Odds 1 - 255
	   Print all odd integers from 1 to 255. """
def odds255():
	for i in range(1, 256):
		if i % 2 == 1:
			print(i)
# odds255()


"""	3. Print Sum 0 - 255
 	   Print integers from 0 to 255, and the sum so far. """
def sum255():
	sum = 0
	for i in range(256):
		sum += i
	return sum
# print(sum255())


""" 4. Iterate Array
	   Print all values in a given array. """
def itr_array(arr):
	for num in arr:
		print(num)
# itr_array([1,2,3])


""" 5. Find Max
	   Print the largest element in a given array """
def find_max(arr):
	max = arr[0]
	for num in arr:
		if num > max:
			max = num
	return max
# print(find_max([1,2,3,8,-3]))
