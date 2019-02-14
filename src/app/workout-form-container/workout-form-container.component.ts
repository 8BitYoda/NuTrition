import {Component, OnInit} from '@angular/core';
import {WorkoutItem} from './models/workout-item';

@Component({
  selector: 'app-workout-form-container',
  templateUrl: './workout-form-container.component.html',
  styleUrls: ['./workout-form-container.component.less']
})
export class WorkoutFormContainerComponent implements OnInit {
  tabs: Array<WorkoutItem> = [
    new WorkoutItem('Workout 1'),
    new WorkoutItem('Workout 2')
  ];
  totalLostHr: number;
  currentTab: number;

  constructor() { }

  ngOnInit() {
    this.totalLostHr = 0;
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

    this.totalLostHr = tempAvg / i;
  }

  addTab() {
    this.tabs.push(new WorkoutItem('Workout ' + (this.tabs.length + 1)));
    this.currentTab = this.tabs.length - 1;
  }

  removeTab(index) {
    this.tabs.splice(index, 1);
    this.currentTab = this.tabs.length - 1;
  }

  editTabLabel() {

  }

  saveTabLabel() {

  }
}
