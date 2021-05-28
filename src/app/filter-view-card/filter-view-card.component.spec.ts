import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterViewCardComponent } from './filter-view-card.component';

describe('FilterViewCardComponent', () => {
  let component: FilterViewCardComponent;
  let fixture: ComponentFixture<FilterViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterViewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
