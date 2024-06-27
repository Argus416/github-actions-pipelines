import CalculatorService from "../service/Calculator";

describe("Sum", () => {
	it("should return 4 when sum 2 + 2", () => {
		const sum = CalculatorService.sum(2, 2);
		expect(sum).toEqual(4);
	});

	it("should return 0 when sum 2 + -2", () => {
		const sum = CalculatorService.sum(2, -2);
		expect(sum).toEqual(0);
	});
});

describe("Subtract", () => {
	it("should return 4 when subtract 6 - 2", () => {
		const subtract = CalculatorService.subtract(6, 2);
		expect(subtract).toEqual(4);
	});

	it("should return -4 when subtract 6 - 10", () => {
		const subtract = CalculatorService.subtract(6, 10);
		expect(subtract).toEqual(-4);
	});

	it("should return 0 when subtract 6 - 6", () => {
		const subtract = CalculatorService.subtract(6, 6);
		expect(subtract).toEqual(0);
	});
});

describe("Multiply", () => {
	it("should return 4 when multiply 2 * 2", () => {
		const multiply = CalculatorService.multiply(2, 2);
		expect(multiply).toEqual(4);
	});

	it("should return 0 when multiply 2 * 0", () => {
		const multiply = CalculatorService.multiply(2, 0);
		expect(multiply).toEqual(0);
	});

	it("should return 6 when multiply 2 * 3", () => {
		const multiply = CalculatorService.multiply(2, 3);
		expect(multiply).toEqual(6);
	});
});

describe("Divide", () => {
	it("should return 4 when divide 8 / 2", () => {
		const divide = CalculatorService.divide(8, 2);
		expect(divide).toEqual(4);
	});

	it("should return 'not possible divide by 0' when divide 8 / 0", () => {
		const divide = CalculatorService.divide(8, 0);
		expect(divide).toEqual("not possible divide by 0");
	});

	it("should return 2 when divide 6 / 3", () => {
		const divide = CalculatorService.divide(6, 3);
		expect(divide).toEqual(2);
	});
});
