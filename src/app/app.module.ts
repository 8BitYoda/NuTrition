import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {StepperContainerComponent} from './stepper-container/stepper-container.component';
import {WorkoutFormContainerComponent} from './workout-form-container/workout-form-container.component';
import {WorkoutFormComponent} from './workout-form-container/workout-form/workout-form.component';
import {NutritionResultsComponent} from './nutrition-results/nutrition-results.component';
import {NutritionDataService} from './service/nutrition-data.service';

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
import {ReactiveFormsModule} from '@angular/forms';
import { SwipeTabDirective } from './directives/swipe-tab.directive';

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
    NutritionResultsComponent,
    SwipeTabDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    materialImports
  ],
  providers: [NutritionDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
