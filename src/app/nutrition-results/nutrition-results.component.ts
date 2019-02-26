import {Component, OnInit} from '@angular/core';
import {NutritionItems} from '../models/nutrition-items';
import {NutritionDataService} from '../service/nutrition-data.service';

@Component({
  selector: 'app-nutrition-results',
  templateUrl: './nutrition-results.component.html',
  styleUrls: ['./nutrition-results.component.css']
})
export class NutritionResultsComponent implements OnInit {

  nutritionInfo: NutritionItems = new NutritionItems();

  constructor(private nuService: NutritionDataService) {
  }

  ngOnInit() {
    this.nutritionInfo = this.nuService.getNuData();

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
