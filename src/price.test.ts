import { expect, test } from 'vitest';
import { taxIncluded } from './price';

test('taxIncluded adds 10% tax', () => {
  expect(taxIncluded(100)).toBe(110);
});
