const calculateTeaPrice = require('./tea');

test('properly calculates price for 100g of Puer', () => {
    expect(calculateTeaPrice(5, 100)).toBe(500);
});

test('returns 0 for negative weight', () => {
    expect(calculateTeaPrice(5, -10)).toBe(0);
});
