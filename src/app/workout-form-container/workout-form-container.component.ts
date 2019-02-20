import {Component, Input, OnInit} from '@angular/core';
import {WorkoutItem} from '../models/workout-item';

@Component({
  selector: 'app-workout-form-container',
  templateUrl: './workout-form-container.component.html',
  styleUrls: ['./workout-form-container.component.less']
})
export class WorkoutFormContainerComponent implements OnInit {

  constructor() {
  }

  @Input() workoutType: string;
  tabs: Array<WorkoutItem> = [];
  currentTab: number;

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
  }

  calculateAverageLoss() {
    let tempAvg = 0;
    let i = 0;
    this.tabs.forEach(tab => {
      if (tab.data.ozLossHr) {
        i++;
        tempAvg += tab.data.ozLossHr;
      }
    });
    this.avgOzLossHr = tempAvg / i;

    this.avgNaLossHr = this.avgOzLossHr * 34;

    this.fluidReplacementGoal = (((this.avgOzLossHr - 30) * 0.5) / 30) * 11 + 17;
    this.sodiumReplacementGoal = (((this.avgNaLossHr - 1000) * 0.5) / 1000) * 400 + 300;
  }

  addTab() {
    this.tabs.push(new WorkoutItem('Workout ' + (this.tabs.length + 1), this.workoutType));
    this.currentTab = this.tabs.length - 1;
  }

  removeTab(index) {
    this.tabs.splice(index, 1);
    this.currentTab = this.tabs.length - 1;
  }
}
