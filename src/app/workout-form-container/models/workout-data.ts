export interface IWorkoutData {
  sWeight: number;
  eWeight: number;
  btlsConsumed: number;
  btlSize: number;
  lenWorkout: number;
  ozLossHr?: number;
}

export class WorkoutData implements IWorkoutData {
  sWeight = 0;
  eWeight = 0;
  btlsConsumed = 0;
  btlSize = 0;
  lenWorkout = 0;
  ozLossHr = 0;
}
