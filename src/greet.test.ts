import { expect, test } from 'vitest';
import { greet } from './greet';

test('greet returns greeting', () => {
  expect(greet('CircleCI')).toBe('Hello, CircleCI!');
});
