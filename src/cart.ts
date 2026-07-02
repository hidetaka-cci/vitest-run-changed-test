import { taxIncluded } from './price';

export function cartTotal(prices: number[]): number {
  return prices.reduce((sum, p) => sum + taxIncluded(p), 0);
}
