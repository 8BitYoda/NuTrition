import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {StepperContainerComponent} from './stepper-container/stepper-container.component';

import {MatStepperModule, MatInputModule, MatFormFieldModule, MatIconModule, MatTabsModule, MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WorkoutFormContainerComponent } from './workout-form-container/workout-form-container.component';
import { WorkoutFormComponent } from './workout-form-container/workout-form/workout-form.component';

const materialImports = [
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StepperContainerComponent,
    WorkoutFormContainerComponent,
    WorkoutFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    materialImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
