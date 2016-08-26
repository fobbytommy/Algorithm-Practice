sumArr = [0];

def smarter_sum(num):
	if num < 0:
		return None

	while len(sumArr) <= num:
		sumArr.append(sumArr[len(sumArr) - 1] + len(sumArr))

	return sumArr[num]

print(smarter_sum(3))
