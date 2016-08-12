def fibonacci(num):
	if num < 0:
		return "Error: Number must be a positive interger."
	elif num == 0:
		return 0

	previous = 0;
	current = 1;

	for idx in range(1, num):
		temp = current
		current += previous
		previous = temp

	return current


print(fibonacci(0))
print(fibonacci(1))
print(fibonacci(2))
print(fibonacci(3))
print(fibonacci(4))
print(fibonacci(5))
print(fibonacci(6))
print(fibonacci(7))
