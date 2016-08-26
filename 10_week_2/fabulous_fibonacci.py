fibonacci = [0, 1]

def fabulous_fibonacci(num):
	if num < 0:
		return None

	while len(fibonacci) <= num:
		previous = fibonacci[len(fibonacci) - 2]
		current = fibonacci[len(fibonacci) - 1]

		fibonacci.append(previous + current)

	return fibonacci[num]

print(fabulous_fibonacci(9))
