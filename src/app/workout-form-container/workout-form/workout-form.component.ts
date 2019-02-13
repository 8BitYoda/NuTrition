import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IWorkoutItem} from '../models/workout-item';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {
  @Output() dataChange = new EventEmitter<IWorkoutItem>();
  @Input() workoutData: IWorkoutItem;
  workoutForm = new FormGroup({
    sWeight: new FormControl('', [Validators.required, Validators.min(0)]),
    eWeight: new FormControl('', [Validators.required, Validators.min(0)]),
    btlsConsumed: new FormControl('', [Validators.required, Validators.min(0)]),
    btlSize: new FormControl('', [Validators.required, Validators.min(0)]),
    lenWorkout: new FormControl('', [Validators.required, Validators.min(0)])
  });

  constructor() {}

  ngOnInit() {}

  getErrorMessage(fieldName) {
    return this.workoutForm.get(fieldName).hasError('required') ? 'You must enter a value' :
      this.workoutForm.get(fieldName).hasError('min') ? 'Your entry must be greater then 0' :
        '';
  }

  saveWorkout() {
    if (this.workoutForm.valid) {
      // Set Values
      this.workoutData.data.sWeight = this.workoutForm.get('sWeight').value;
      this.workoutData.data.eWeight = this.workoutForm.get('eWeight').value;
      this.workoutData.data.btlsConsumed = this.workoutForm.get('btlsConsumed').value;
      this.workoutData.data.btlSize = this.workoutForm.get('btlSize').value;
      this.workoutData.data.lenWorkout = this.workoutForm.get('lenWorkout').value;

      // Calculations
      this.workoutData.data.lbsLost = this.workoutForm.get('sWeight').value - this.workoutForm.get('eWeight').value;
      this.workoutData.data.subTotalOzLost = this.workoutData.data.lbsLost * 15.34;
      this.workoutData.data.bottleTotalOz = this.workoutForm.get('btlsConsumed').value * this.workoutForm.get('btlSize').value;
      this.workoutData.data.ozLossHr = (this.workoutData.data.subTotalOzLost + this.workoutData.data.bottleTotalOz) /
        (this.workoutData.data.lenWorkout / 60);

      this.dataChange.emit(this.workoutData);
    }
  }
}
