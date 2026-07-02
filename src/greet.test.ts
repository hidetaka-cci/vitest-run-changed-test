import { expect, test } from 'vitest';
import { greet } from './greet';

test('greet returns greeting', () => {
  expect(greet('World')).toBe('Hello, CircleCI!');
});
