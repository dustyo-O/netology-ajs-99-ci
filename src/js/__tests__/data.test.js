import calculateCashback from '../data';

test.each([
  ['cashback above 100000', 200000, 10000],
  ['cashback on 100001', 100001, 5001],
])(('%s'), (title, amount, cashback) => {
  expect(calculateCashback(amount)).toBe(cashback);
});

test('cashback on 100000', () => {
  expect(calculateCashback(100000)).toBe(5000);
});

test('cashback on 99999', () => {
  expect(calculateCashback(99999)).toBe(2000);
});

test('cashback between 10000 and 100000', () => {
  expect(calculateCashback(50000)).toBe(1000);
});

test('cashback between 1000 and 10000', () => {
  expect(calculateCashback(5000)).toBe(50);
});

test('cashback on 1001', () => {
  expect(calculateCashback(1001)).toBe(11);
});

test('cashback on 1000', () => {
  expect(calculateCashback(1000)).toBe(10);
});

test('cashback on 999', () => {
  expect(calculateCashback(999)).toBe(0);
});

test('cashback below 1000', () => {
  expect(calculateCashback(500)).toBe(0);
});
