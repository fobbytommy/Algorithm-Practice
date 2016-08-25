fact = [1]

def faster_factorial(num):
	if num < 0:
		return None

	while len(fact) <= num:
		fact.append(fact[len(fact)-1] * len(fact))

	return fact[num]

print(faster_factorial(7))
