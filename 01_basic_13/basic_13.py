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


""" 6. Get Average
	   Analyze an array's values and print the average """
def get_avg(arr):
	sum = 0
	for num in arr:
		sum += num
	avg = float(sum) / len(arr)
	return avg
# print(get_avg([1,2,3,4]))


""" 7. Array with Odds
	   Create an array with odd integers from 1-255. """
def array_odds_255():
	arr = []
	for num in range(1, 256):
		if num % 2 == 1:
			arr.append(num)
	return arr
# print(array_odds_255());


""" 8. Squeare the Values
	   Given an array, square each value in the array. """
def sqr_values(arr):
	for i in range(len(arr)):
		arr[i] *= arr[i]
	return arr
# print(sqr_values([2,3,4]))


""" 9. Greater Than Y
	   Count the number of array values greater than a given value Y. """
def greater_than_y(arr, y):
	count = 0
	for num in arr:
		if num > y:
			count += 1
	return count
# print(greater_than_y([2,3,0], 1))


""" 10. Zero Out Negative Numbers
	    Set negative array values to zero. """
def zero_out_negative(arr):
	for num in arr:
		if num < 0:
			arr[arr.index(num)] = 0
	return arr
# print(zero_out_negative([-1,2,3,-5]))


""" 11. Max, Min, Average
		Given an array, create a new array with max, min, and average values. """
def max_min_avg(arr):
	max = arr[0]
	min = arr[0]
	sum = 0
	for num in arr:
		if num > max:
			max = num
		if num < min:
			min = num
		sum += num
	avg = float(sum) / len(arr)
	new_arr = [max, min, avg]
	return new_arr
# print(max_min_avg([1,2,3,4]))


""" 12. Shift Array Values
 		Given an array, shift all values forward, dropping the
		first value and leaving an extra '0' value at the end. """
def shift_array(arr):
	for idx in range(1, len(arr)):
		arr[idx-1] = arr[idx]
	arr[len(arr)-1] = 0
 	return arr
# print(shift_array([1,2,3,4]))


""" 13. Number to String
 		Replace any negativate values in an array with 'Dojo'. """
def num_to_str(arr):
	for num in arr:
		if num < 0:
			arr[arr.index(num)] = 'Dojo'
	return arr
# print(num_to_str([-1,3,0,-1,-2]))
