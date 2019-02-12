import {Component, OnInit} from '@angular/core';
import {WorkoutItem} from './models/workout-item';

@Component({
  selector: 'app-workout-form-container',
  templateUrl: './workout-form-container.component.html',
  styleUrls: ['./workout-form-container.component.css']
})
export class WorkoutFormContainerComponent implements OnInit {
  tabs: Array<{}> = [
    new WorkoutItem(1),
    new WorkoutItem(2)
  ];
  constructor() {
  }

  ngOnInit() {
  }

}
