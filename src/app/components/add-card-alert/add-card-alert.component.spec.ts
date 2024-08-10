import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardAlertComponent } from './add-card-alert.component';

describe('AddCardAlertComponent', () => {
  let component: AddCardAlertComponent;
  let fixture: ComponentFixture<AddCardAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCardAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCardAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
