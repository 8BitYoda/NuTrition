import {Component, OnInit} from '@angular/core';
import {WorkoutItem} from './models/workout-item';

@Component({
  selector: 'app-workout-form-container',
  templateUrl: './workout-form-container.component.html',
  styleUrls: ['./workout-form-container.component.css']
})
export class WorkoutFormContainerComponent implements OnInit {
  tabs: Array<WorkoutItem> = [
    new WorkoutItem(1),
    new WorkoutItem(2)
  ];
  totalLostHr = 0;

  constructor() {
  }

  ngOnInit() {
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
}
