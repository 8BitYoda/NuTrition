import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {IWorkoutItem} from '../models/workout-item';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {
  @Output() dataChange = new EventEmitter<IWorkoutItem>();
  @Input() data: IWorkoutItem;
  ozLostHr = 0;

  // Fields
  sWeight = new FormControl('', [Validators.required, Validators.min(0)]);
  eWeight = new FormControl('', [Validators.required, Validators.min(0)]);
  btlsConsumed = new FormControl('', [Validators.required, Validators.min(0)]);
  btlSize = new FormControl('', [Validators.required, Validators.min(0)]);
  lenWorkout = new FormControl('', [Validators.required, Validators.min(0)]);

  constructor() {
  }

  ngOnInit() {
    console.log(this.data.id, 'data');
  }

  getErrorMessage(fieldName) {
    return fieldName.hasError('required') ? 'You must enter a value' :
      fieldName.hasError('min') ? 'Your entry must be greater then 0' :
        '';
  }

  saveWorkout() {
    this.data.data.sWeight = this.sWeight.value;
    this.data.data.eWeight = this.eWeight.value;
    this.data.data.btlsConsumed = this.btlsConsumed.value;
    this.data.data.btlSize = this.btlSize.value;
    this.data.data.lenWorkout = this.lenWorkout.value;

    this.data.data.ozLossHr = (((this.sWeight.value - this.eWeight.value) * 15.34) +
        (this.btlsConsumed.value * this.btlSize.value)) / this.lenWorkout.value;

    this.dataChange.emit(this.data);
  }
}
