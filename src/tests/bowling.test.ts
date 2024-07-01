import { test, expect } from '@jest/globals';
import { SHIFT_TYPE } from '../core/index';
//const BOWLS: number = 20;

describe('Calculate points', () => {
  test('20 shots: 20 fails = zero points', () => {
    const result: number = calculatePoints(20, 0);

    expect(result).toBe(0);
  });

  test('20 shots: 10 pairs of 1 = 20 points', () => {
    const result: number = calculatePoints(20, 10);

    expect(result).toBe(20);
  });

  test('20 shots: 1 spare, 1 success (5 bowls), 17 failures = 20 points', () => {
    const result: number = calculatePoints(0, 1, 5);

    expect(result).toBe(20);
  });
});
