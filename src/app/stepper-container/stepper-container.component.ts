import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stepper-container',
  templateUrl: './stepper-container.component.html',
  styleUrls: ['./stepper-container.component.scss']
})
export class StepperContainerComponent implements OnInit {

  runForms: boolean;
  bikeForms: boolean;

  constructor() {}

  ngOnInit() {
    this.runForms = false;
    this.bikeForms = false;
  }
}
