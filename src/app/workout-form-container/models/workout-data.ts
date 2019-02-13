export interface IWorkoutData {
  sWeight: number;
  eWeight: number;
  btlsConsumed: number;
  btlSize: number;
  lenWorkout: number;

  lbsLost: number;
  subTotalOzLost: number;
  bottleTotalOz: number;
  ozLossHr: number;
}

export class WorkoutData implements IWorkoutData {
  sWeight = null;
  eWeight = null;
  btlsConsumed = null;
  btlSize = null;
  lenWorkout = null;
  lbsLost = null;
  subTotalOzLost = null;
  bottleTotalOz = null;
  ozLossHr = null;
}
