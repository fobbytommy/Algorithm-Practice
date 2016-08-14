function clockHandAngles(seconds){
	var temp;
	var hour_hand, minute_hand, second_hand;

	// calculating hour hand angle
	temp = seconds / 3600;
	while (temp >= 12) { //if over 12 clock
		temp -= 12;
	}
	hour_hand = Math.round(30 * temp * 10) / 10;
	while (seconds >=  3600){
		seconds -= 3600;
	}

	// calculating minute hand angle
	temp = seconds / 60;
	minute_hand = Math.round( 6 * temp * 10) / 10;
	while (seconds >= 60) {
		seconds -= 60;
	}

	// calculating second hand angle
	second_hand = Math.round (6 * seconds * 10) / 10;

	console.log("Hour hand: " + hour_hand + " degrees");
	console.log("Minute hand: " + minute_hand + " degrees");
	console.log("Second hand: " + second_hand + " degrees");

}

clockHandAngles(23672);
