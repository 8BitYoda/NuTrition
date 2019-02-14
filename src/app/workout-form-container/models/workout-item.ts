import {IWorkoutData, WorkoutData} from './workout-data';

export interface IWorkoutItem {
  id: string;
  type: string;
  data: IWorkoutData;
}

export class WorkoutItem implements IWorkoutItem {
  id: string = null;
  type: string = null;
  data: IWorkoutData = null;

  constructor(id: string, type: string) {
    this.id = id;
    this.type = type;
    this.data = new WorkoutData();
  }
}
