import { expect, test } from 'vitest';
import { cartTotal } from './cart';

test('cartTotal sums tax-included prices', () => {
  expect(cartTotal([100, 200])).toBe(330);
});
