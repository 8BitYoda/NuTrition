export interface IWorkoutData {
  sWeight: number;
  eWeight: number;
  btlsConsumed: number;
  btlSize: number;
  lenWorkout: number;
  distWorkout: number;

  lbsLost: number;
  subTotalOzLost: number;
  bottleTotalOz: number;
  ozLossHr: number;
  estMET: number;
  estCaloriesBurned: number;
}

export class WorkoutData implements IWorkoutData {
  sWeight = null;
  eWeight = null;
  btlsConsumed = null;
  btlSize = null;
  lenWorkout = null;
  distWorkout = null;

  lbsLost = null;
  subTotalOzLost = null;
  bottleTotalOz = null;
  ozLossHr = null;
  estMET = null;
  estCaloriesBurned = null;
}
