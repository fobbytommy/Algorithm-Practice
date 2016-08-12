// ....meh
// function sumToOne(num){
// 	var result = 0; // this is the problem...
// 	while (num >= 10) {
//
// 		while (num) {
//
// 			var oneDigit = num % 10;
// 			num -= oneDigit;
// 			num /= 10;
// 			console.log("inner", num);
// 			console.log(typeof(num));
// 			result += oneDigit;
// 			console.log("result",result);
// 		}
// 		num = result;
// 		console.log("outer",num);
//
// 	}
// 	 return num;
// }
// console.log(sumToOne(78567896987687896796899067));

function someToOne(num){
	if (num < 1) {
		return 0;
	}
	while(num >= 10) {
		var str_num = String(num);
		// console.log(str_num);
		num = 0;
		for (var i = 0, j = str_num.length; i< j; i++){
				num += parseInt(str_num[i]);
		}
		// console.log(num);
	}
	return num;
}

console.log(someToOne(1357));
