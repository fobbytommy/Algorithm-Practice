def radix_sort(arr):
	list_length = len(arr)
	divisor = 10
	remainder = 1

	while True:
		basket = [[], [], [], [], [], [], [], [], [], []]
		for num in arr:
			index = num % divisor
			index /= remainder
			basket[index].append(num)

		divisor *= 10
		remainder *= 10

		if len(basket[0]) == list_length:
			return basket[0]

		arr = []

		for eachList in basket:
			for num in eachList:
				arr.append(num)


arr = [56, 154, 123, 3]
print radix_sort(arr)
