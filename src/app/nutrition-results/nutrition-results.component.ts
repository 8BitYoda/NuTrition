import {Component, Input, OnInit} from '@angular/core';
import {NutritionItems} from '../models/nutrition-items';

@Component({
  selector: 'app-nutrition-results',
  templateUrl: './nutrition-results.component.html',
  styleUrls: ['./nutrition-results.component.css']
})
export class NutritionResultsComponent implements OnInit {

  @Input() nutritionInfo: NutritionItems = new NutritionItems();

  constructor() {
  }

  ngOnInit() {
  }

  get runData() {
    if (this.nutritionInfo.runData) {
      return this.nutritionInfo.runData;
    }
  }

  get bikeData() {
    if (this.nutritionInfo.bikeData) {
      return this.nutritionInfo.bikeData;
    }
  }
}
