def someToOne(num):
	if num < 1:
		return 0
	while num >= 10:
		str_num = str(num)
		num = 0
		for idx in range(len(str_num)):
			num += int(str_num[idx])
	return num;


print(someToOne(13457679));
