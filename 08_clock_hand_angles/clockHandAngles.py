# from __future__ import division

def clockHandAngles(seconds):

	# calculating hour hand angle
	temp = seconds / 3600.0
	while temp >= 12:
		temp -= 12
	hour_hand = round(30 * temp, 1)
	while seconds >= 3600:
		seconds -= 3600

	# calculating minute hand angle
	temp = seconds / 60.0
	minute_hand = round(6 * temp, 1)
	while seconds >= 60:
		seconds -= 60

	# calculating second hand angle
	second_hand = round(6 * seconds, 1)

	print("Hour hand: {} degrees".format(hour_hand))
	print("Minute hand: {} degrees".format(minute_hand))
	print("Second hand: {} degrees".format(second_hand))

clockHandAngles(23672)
