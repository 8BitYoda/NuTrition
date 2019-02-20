import {INutritionData, NutritionData} from './nutrition-data';

export interface INutritionItems {
  runData: INutritionData;
  bikeData: INutritionData;
}

export class NutritionItems implements INutritionItems {
  runData: INutritionData;
  bikeData: INutritionData;

  constructor() {
    this.runData = new NutritionData();
    this.bikeData = new NutritionData();
  }
}
