"""
Threes and Fives:

Add all the values from x and y (inclusive & defaults 100 and 4000000)
that are evenly divided by 3 or 5 but not both.
Display this value in the console.
"""

def three_five(x = 100, y = 4000000):

	if x > y:
		start = y
		end = x
	else:
		start = x
		end = y

	sum = 0

	while(start <= end):
		if (start % 3 == 0 or start % 5 == 0) and (not start % 15 == 0):
			sum += start
		start += 1

	return sum


print(three_five());
