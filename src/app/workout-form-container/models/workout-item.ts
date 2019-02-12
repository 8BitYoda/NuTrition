import {IWorkoutData, WorkoutData} from './workout-data';

export interface IWorkoutItem {
  id: number;
  data: IWorkoutData;
}

export class WorkoutItem implements IWorkoutItem {
  id: number = null;
  data: IWorkoutData = null;

  constructor(id: number) {
    this.id = id;
    this.data = new WorkoutData();
  }
}
