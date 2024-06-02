import { test, expect } from '@jest/globals';
import { getResultShotType, SHIFT } from '../core/index';
//const BOWLS: number = 20;
describe('Calculate type of result shot', () => {
  test('Spare result shot', () => {
    const result: SHIFT = getResultShotType(10, 10);

    expect(result).toBe(SHIFT.Spare);
  });
  test('Strike result shot', () => {
    const result: SHIFT = getResultShotType(20, 0);

    expect(result).toBe(SHIFT.Strike);
  });
  test('Open Frame result shot', () => {
    const result: SHIFT = getResultShotType(10, 0);

    expect(result).toBe(SHIFT.OpenFrame);
  });
});
