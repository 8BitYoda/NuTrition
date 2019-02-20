import {Component, OnInit} from '@angular/core';
import {NutritionData} from '../models/nutrition-data';
import {NutritionItems} from '../models/nutrition-items';

@Component({
  selector: 'app-stepper-container',
  templateUrl: './stepper-container.component.html',
  styleUrls: ['./stepper-container.component.less']
})
export class StepperContainerComponent implements OnInit {

  runForms: boolean;
  bikeForms: boolean;
  nutritionData: NutritionData;
  nutritionItems: NutritionItems = new NutritionItems();

  constructor() {
  }

  ngOnInit() {
    this.nutritionData = new NutritionData();
    this.runForms = false;
    this.bikeForms = false;
  }

  populateNutritionInfo() {
    if (this.nutritionData.type === 'run') {
      this.nutritionItems.runData = new NutritionData();
      this.nutritionItems.runData = this.nutritionData;
    } else if (this.nutritionData.type === 'bike') {
      this.nutritionItems.bikeData = new NutritionData();
      this.nutritionItems.bikeData = this.nutritionData;
    }
  }
}
