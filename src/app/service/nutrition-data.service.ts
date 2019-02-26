import {Injectable} from '@angular/core';
import {NutritionData} from '../models/nutrition-data';
import {NutritionItems} from '../models/nutrition-items';

@Injectable({
  providedIn: 'root'
})
export class NutritionDataService {

  constructor() {
  }

  nutritionStore: NutritionItems = new NutritionItems();

  setNuData(data: NutritionData) {
    if (data.type === 'bike') {
      this.nutritionStore.bikeData = data;
    } else if (data.type === 'run') {
      this.nutritionStore.runData = data;
    }
  }

  getNuData() {
    return this.nutritionStore;
  }
}
