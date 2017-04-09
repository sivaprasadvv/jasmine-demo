describe("MathUtils", function() {
	
	var calc;
	
	beforeEach(function () {
		calc = new MathUtils();
		spyOn(calc, "multiply");
	});
	
	/* Start : Nested describe Style */
	/*describe("calc object is used to calculate the basic math operations", function () {		
		it("sum", function() {
			expect(calc.sum(5,10)).toEqual(15);
		});		
	});
	
	describe("calc obj is used to calculate the basic subtract operations", function() {
		it("subtract", function(){
			expect(calc.subtract(10,5)).toEqual(5);
		});
	});
	
	describe("calc obj is used to calculate the basic multiplication", function() {
		it("multiply", function() {
			expect(calc.multiply(5,10)).toEqual(50);
		});
	});
	
	describe("calc obj is used to calculate the basic division", function() {
		it("divide", function() {
			expect(calc.divide(10,5)).toEqual(2);
		});
	});
	
	describe("calc obj is used to calculate the factorial", function() {
		it("factorial", function() {
			expect(calc.factorial(5)).toEqual(120);
		});
	});
	
	describe("calc obj is used calculate the catorial for negetive", function() {
		it("Factorial for negative value", function() {
			expect(function() {
				calc.factorial(-7)
			}).toThrowError(Error);
		});
	}); */
	/* End : Nested describe Style */
	
	/* Start: Just test specs (cases) under one Suite (describe) */
	
	it("sum operation", function() {
		expect(calc.sum(5,10)).toEqual(15);		
	});
	
	it("multiply operation using spies", function(){
		calc.multiply(3.3,5.7);		
		expect(calc.multiply).toHaveBeenCalled();
		expect(calc.multiply).toHaveBeenCalledWith(3.3,5.7);
	});
	
	/* End: Just test specs (cases) under one Suite (describe) */
	
	
	afterEach(function() {
		calc = null;
	});
	
});