import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IWorkoutItem} from '../../models/workout-item';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss']
})
export class WorkoutFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  @Output() dataChange = new EventEmitter<IWorkoutItem>();
  @Input() workoutData: IWorkoutItem;
  @Output() formValidity = new EventEmitter();

  workoutForm: FormGroup;

  // MET values retrieved from:
  // http://download.lww.com/wolterskluwer_vitalstream_com/permalink/mss/a/mss_43_8_2011_06_13_ainsworth_202093_sdc1.pdf
  // https://sites.google.com/site/compendiumofphysicalactivities/references
  static calcRunMET(len: number, dist: number) {
    const pace: number = (dist / len) * 60;

    if (pace <= 4) {
      return 6.0;
    } else if (pace > 4 && pace <= 5) {
      return 8.3;
    } else if (pace > 5 && pace <= 5.2) {
      return 9.0;
    } else if (pace > 5.2 && pace <= 6) {
      return 9.8;
    } else if (pace > 6 && pace <= 6.7) {
      return 10.5;
    } else if (pace > 6.7 && pace <= 7) {
      return 11.0;
    } else if (pace > 7 && pace <= 7.5) {
      return 11.5;
    } else if (pace > 7.5 && pace <= 8) {
      return 11.8;
    } else if (pace > 8 && pace <= 8.6) {
      return 12.3;
    } else if (pace > 8.6 && pace <= 9) {
      return 12.8;
    } else if (pace > 9 && pace <= 10) {
      return 14.5;
    } else if (pace > 10 && pace <= 11) {
      return 16;
    } else if (pace > 11 && pace <= 12) {
      return 19;
    } else if (pace > 12 && pace <= 13) {
      return 19.8;
    } else if (pace > 13) {
      return 23;
    }
  }

  static calcBikeMET(len: number, dist: number) {
    const paceMPH: number = (dist / len) * 60;

    if (paceMPH < 10) {
      return 4;
    } else if (paceMPH >= 10 && paceMPH < 12) {
      return 6.8;
    } else if (paceMPH >= 12 && paceMPH < 14) {
      return 8;
    } else if (paceMPH >= 14 && paceMPH < 16) {
      return 10;
    } else if (paceMPH >= 16 && paceMPH <= 19) {
      return 12;
    } else if (paceMPH > 19) {
      return 15.8;
    }
  }

  static calcEstCalBurned(met: number, weightLbs: number, len: number) {
    return Math.round((weightLbs / 2.205) * met) * (len / 60);
  }

  ngOnInit() {
    this.workoutForm = this.fb.group({
      sWeight: ['', [Validators.required, Validators.min(0)]],
      eWeight: ['', [Validators.required, Validators.min(0)]],
      btlsConsumed: ['', [Validators.required, Validators.min(0)]],
      btlSize: ['', [Validators.required, Validators.min(0)]],
      lenWorkout: ['', [Validators.required, Validators.min(0)]],
      distWorkout: ['', [Validators.required, Validators.min(0)]]
    });
  }

  get sWeight() {
    return this.workoutForm.get('sWeight');
  }

  get eWeight() {
    return this.workoutForm.get('eWeight');
  }

  get btlsConsumed() {
    return this.workoutForm.get('btlsConsumed');
  }

  get btlSize() {
    return this.workoutForm.get('btlSize');
  }

  get lenWorkout() {
    return this.workoutForm.get('lenWorkout');
  }

  get distWorkout() {
    return this.workoutForm.get('distWorkout');
  }

  getErrorMessage(fieldName) {
    return this.workoutForm.get(fieldName).hasError('required') ? 'You must enter a number' :
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
      this.workoutData.data.distWorkout = this.workoutForm.get('distWorkout').value;

      // Calculations
      this.workoutData.data.lbsLost = this.workoutForm.get('sWeight').value - this.workoutForm.get('eWeight').value;
      this.workoutData.data.subTotalOzLost = this.workoutData.data.lbsLost * 15.34;
      this.workoutData.data.bottleTotalOz = this.workoutForm.get('btlsConsumed').value * this.workoutForm.get('btlSize').value;
      this.workoutData.data.ozLossHr = ((this.workoutData.data.subTotalOzLost + this.workoutData.data.bottleTotalOz) /
        (this.workoutData.data.lenWorkout / 60));

      if (this.workoutData.type === 'run') {
        this.workoutData.data.ozLossHr = this.workoutData.data.ozLossHr + 30;

        this.workoutData.data.estMET = WorkoutFormComponent.calcRunMET(
          this.workoutData.data.lenWorkout, this.workoutData.data.distWorkout);

      } else if (this.workoutData.type === 'bike') {
        this.workoutData.data.estMET = WorkoutFormComponent.calcBikeMET(
          this.workoutData.data.lenWorkout, this.workoutData.data.distWorkout);
      }

      this.workoutData.data.estCaloriesBurned = WorkoutFormComponent.calcEstCalBurned(
        this.workoutData.data.estMET,
        this.workoutData.data.sWeight,
        this.workoutData.data.lenWorkout
      );

      this.dataChange.emit(this.workoutData);
      this.formValidity.emit(true);
    }
  }
}
