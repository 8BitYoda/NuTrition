import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {StepperContainerComponent} from './stepper-container/stepper-container.component';

import {
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatButtonModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WorkoutFormContainerComponent} from './workout-form-container/workout-form-container.component';
import {WorkoutFormComponent} from './workout-form-container/workout-form/workout-form.component';
import { NutritionResultsComponent } from './nutrition-results/nutrition-results.component';

const materialImports = [
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StepperContainerComponent,
    WorkoutFormContainerComponent,
    WorkoutFormComponent,
    NutritionResultsComponent
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
