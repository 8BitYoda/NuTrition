import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkoutItem} from '../models/workout-item';
import {INutritionItems, NutritionItems} from '../models/nutrition-items';
import {NutritionData} from '../models/nutrition-data';

@Component({
  selector: 'app-workout-form-container',
  templateUrl: './workout-form-container.component.html',
  styleUrls: ['./workout-form-container.component.less']
})
export class WorkoutFormContainerComponent implements OnInit {

  constructor() {
  }

  @Input() workoutType: string;
  @Input() nutritionData: NutritionData;
  @Output() stepValidity = new EventEmitter();
  @Output() sendNutritionData = new EventEmitter<NutritionData>();

  tabs: Array<WorkoutItem> = [];
  currentTab: number;
  tabValidities: Array<boolean>;
  isStepValid: boolean;

  avgOzLossHr: number;
  avgNaLossHr: number;

  fluidReplacementGoal: number;
  sodiumReplacementGoal: number;

  ngOnInit() {
    this.tabs.push(
      new WorkoutItem('Workout 1', this.workoutType),
      new WorkoutItem('Workout 2', this.workoutType)
    );
    this.avgOzLossHr = 0;
    this.fluidReplacementGoal = 0;
    this.avgNaLossHr = 0;
    this.sodiumReplacementGoal = 0;
    this.currentTab = 0;

    this.tabValidities = [false, false];
    this.isStepValid = false;
  }

  calculateAverageLoss() {
    let tempAvg = 0;
    let i = 0;
    this.tabs.forEach(tab => {
      if (tab.data.ozLossHr) {
        i++;
        tempAvg += tab.data.ozLossHr;
      }
      this.nutritionData.data = [];
      this.nutritionData.data.push(tab.data);
      this.nutritionData.type = tab.type;
    });
    this.nutritionData.avgOzLossHr = tempAvg / i;
    this.nutritionData.avgNaLossHr = this.avgOzLossHr * 34;
    this.nutritionData.fluidReplacementGoal = (((this.avgOzLossHr - 30) * 0.5) / 30) * 11 + 17;
    this.nutritionData.sodiumReplacementGoal = (((this.avgNaLossHr - 1000) * 0.5) / 1000) * 400 + 300;

    this.sendNutritionData.emit(this.nutritionData);
  }

  addTab() {
    this.tabs.push(new WorkoutItem('Workout ' + (this.tabs.length + 1), this.workoutType));
    this.tabValidities.push(false);
    this.isStepValid = false;
    this.currentTab = this.tabs.length - 1;
    this.stepValidity.emit(false);
  }

  removeTab(index) {
    this.tabs.splice(index, 1);
    this.currentTab = this.tabs.length - 1;
    this.checkStepValidity(null, index);
  }

  checkStepValidity(e, i) {
    if (e) {
      this.tabValidities[i] = e;
    } else {
      this.tabValidities.splice(i, 1);
    }

    let temp = false;
    this.tabValidities.forEach(function (currTab) {
      temp = currTab;
    });

    if (temp) {
      this.isStepValid = temp;
      this.stepValidity.emit(this.isStepValid);
    }
  }
}
