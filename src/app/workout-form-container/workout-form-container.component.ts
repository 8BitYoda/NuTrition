import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkoutItem} from '../models/workout-item';
import {NutritionData} from '../models/nutrition-data';
import {NutritionDataService} from '../service/nutrition-data.service';

@Component({
  selector: 'app-workout-form-container',
  templateUrl: './workout-form-container.component.html',
  styleUrls: ['./workout-form-container.component.scss']
})
export class WorkoutFormContainerComponent implements OnInit {

  constructor(private nuService: NutritionDataService) {
  }

  @Input() workoutType: string;
  @Output() stepValidity = new EventEmitter();

  tabs: Array<WorkoutItem> = [];
  currentTab: number;
  tabValidities: Array<boolean>;
  isStepValid: boolean;
  nutritionData: NutritionData;

  ngOnInit() {
    this.tabs.push(
      new WorkoutItem('Workout 1', this.workoutType),
      new WorkoutItem('Workout 2', this.workoutType)
    );
    this.currentTab = 0;

    this.tabValidities = [false, false];
    this.isStepValid = false;
    this.nutritionData = new NutritionData();
  }

  calculateAverageLoss() {
    let tempOzAvg = 0;
    let tempCalAvg = 0;
    let i = 0;
    this.tabs.forEach(tab => {
      if (tab.data.ozLossHr) {
        i++;
        tempOzAvg += tab.data.ozLossHr;
        tempCalAvg += (tab.data.estCaloriesBurned / (tab.data.lenWorkout / 60));
      }
    });

    this.nutritionData.type = this.workoutType;
    this.nutritionData.avgOzLossHr = tempOzAvg / i;
    this.nutritionData.avgCalLossHr = tempCalAvg / i;
    this.nutritionData.avgNaLossHr = this.nutritionData.avgOzLossHr * 34;
    this.nutritionData.fluidReplacementGoal = (((this.nutritionData.avgOzLossHr - 30) * 0.5) / 30) * 11 + 17;
    this.nutritionData.sodiumReplacementGoal = (((this.nutritionData.avgNaLossHr - 1000) * 0.5) / 1000) * 400 + 300;

    if (this.workoutType === 'bike') {
      this.nutritionData.calorieReplacementGoal = ((((this.nutritionData.avgCalLossHr - 700) * 0.5) / 100) * 40) + 240;
    } else if (this.workoutType === 'run') {
      this.nutritionData.calorieReplacementGoal = ((((this.nutritionData.avgCalLossHr - 700) * 0.5) / 100) * 100) + 150;
    }
    this.nuService.setNuData(this.nutritionData);
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
