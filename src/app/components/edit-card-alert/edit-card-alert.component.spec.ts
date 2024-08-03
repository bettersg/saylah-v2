import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCardAlertComponent } from './edit-card-alert.component';

describe('EditCardAlertComponent', () => {
  let component: EditCardAlertComponent;
  let fixture: ComponentFixture<EditCardAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCardAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCardAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
