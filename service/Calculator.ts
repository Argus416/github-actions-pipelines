class CalculatorService {
  sum(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number | string{
    if (b === 0) {
      return 'not possible divide by 0';
    }
    return a / b;
  }
}


export default new CalculatorService();