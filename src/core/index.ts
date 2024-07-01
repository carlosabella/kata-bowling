export const enum SHIFT_TYPE {
  Spare,
  Strike,
  OpenFrame,
}

export class Shift {
  shiftType: SHIFT_TYPE;
  bowls: number;
}

export class Bowlings {
  shiftOne: Shift;
}
