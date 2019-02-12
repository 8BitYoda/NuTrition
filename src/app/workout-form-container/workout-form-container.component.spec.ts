import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutFormContainerComponent } from './workout-form-container.component';

describe('WorkoutFormContainerComponent', () => {
  let component: WorkoutFormContainerComponent;
  let fixture: ComponentFixture<WorkoutFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
