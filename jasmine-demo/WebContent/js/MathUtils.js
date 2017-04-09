MathUtils = function() {}

MathUtils.prototype.sum = function(num1, num2) {
	return (num1+num2);
}

MathUtils.prototype.subtract = function(num1, num2) {
	return (num1 - num2);
}

MathUtils.prototype.multiply = function(num1, num2) {
	return (num1 * num2);
}

MathUtils.prototype.divide = function(num1, num2) {
	if (num2 != 0) {
		return num1 / num2;
	} else {
		return num1;
	}
}

MathUtils.prototype.factorial = function(num) {
	if (num < 0) {
		throw new Error("There is no factorial for negetive values");
	
	} else if (num == 0 || num == 1) {
		return 1;
	} else {
		return num * this.factorial(num-1);
	}	
}