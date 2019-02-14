import {IWorkoutData, WorkoutData} from './workout-data';

export interface IWorkoutItem {
  id: string;
  data: IWorkoutData;
}

export class WorkoutItem implements IWorkoutItem {
  id: string = null;
  data: IWorkoutData = null;

  constructor(id: string) {
    this.id = id;
    this.data = new WorkoutData();
  }
}
