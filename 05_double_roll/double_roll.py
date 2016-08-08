"""
Statistics to Doubles

Implement a 'die' that randomly returns an integer between 1 and 6 inclusive.
Roll a pair of these dice, tracking the statistics until doubles are rolled.
Display the number of rolls, min, max, and average.
"""
import random

def die():

	count = 0
	min = 0
	max = 0
	sum = 0

	while True:

		count += 1

		roll_1 = random.randint(1, 6)
		roll_2 = random.randint(1, 6)
		print(roll_1, roll_2)

		sum += roll_1 + roll_2

		if min == 0:
			min = roll_1 + roll_2
			max = roll_1 + roll_2
		elif roll_1 + roll_2 < min:
			min = roll_1 + roll_2
		if roll_1 + roll_2 > max:
			max = roll_1 + roll_2

		if roll_1 == roll_2:
			break


	avg = float(sum) / count
	result = ["rolls: {}".format(count), "minimum: {}".format(min), "maximum: {}".format(max), "average: {}".format(round(avg, 1))]

	return result

print(die())
