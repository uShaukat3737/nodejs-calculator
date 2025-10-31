// src/integration.test.js
const { add, subtract, multiply, divide } = require('./calculator');

describe('Integration tests for calculator operations', () => {
  test('should perform a full workflow of combined operations successfully', () => {
    // Example: (5 + 5) * 2 ÷ (10 - 5) = 4
    const result = divide(multiply(add(5, 5), 2), subtract(10, 5));
    expect(result).toBe(4);
  });

  test('should handle chained divide-by-zero errors gracefully', () => {
    // Example: (10 * 2) ÷ (5 - 5) -> division by zero
    expect(() => divide(multiply(10, 2), subtract(5, 5))).toThrow('Cannot divide by zero');
  });
});
