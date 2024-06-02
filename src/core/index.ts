export const enum SHIFT {
  Spare,
  Strike,
  OpenFrame,
}
export function getResultShotType(shotOne: number, shotTwo: number): SHIFT {
  if (shotOne === 20) {
    return SHIFT.Strike;
  } else if (shotOne + shotTwo === 20) {
    return SHIFT.Spare;
  } else {
    return SHIFT.OpenFrame;
  }
}
