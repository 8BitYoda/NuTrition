import {IWorkoutData} from './workout-data';

export interface INutritionData {
  type: string;
  data?: Array<IWorkoutData>;
  avgOzLossHr: number;
  fluidReplacementGoal: number;
  avgNaLossHr: number;
  sodiumReplacementGoal: number;
}

export class NutritionData implements INutritionData {
  type: string;
  avgOzLossHr: number;
  fluidReplacementGoal: number;
  avgNaLossHr: number;
  sodiumReplacementGoal: number;

  constructor() {
    this.type = null;
    this.avgOzLossHr = null;
    this.avgNaLossHr = null;
    this.fluidReplacementGoal = null;
    this.sodiumReplacementGoal = null;
  }
}
