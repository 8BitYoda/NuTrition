import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionResultsComponent } from './nutrition-results.component';

describe('NutritionResultsComponent', () => {
  let component: NutritionResultsComponent;
  let fixture: ComponentFixture<NutritionResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
