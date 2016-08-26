tribonacci = [0, 0, 1]

def tricky_tribonacci(num):
	if num < 0:
		return None

	while len(tribonacci) <= num:
		previous2 = tribonacci[len(tribonacci) - 3]
		previous1 = tribonacci[len(tribonacci) - 2]
		current = tribonacci[len(tribonacci) - 1]

		tribonacci.append(previous2 + previous1 + current)

	return tribonacci[num]

print(tricky_tribonacci(9))
