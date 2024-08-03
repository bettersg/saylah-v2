import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardPopupComponent } from './create-card-popup.component';

describe('CreateCardPopupComponent', () => {
  let component: CreateCardPopupComponent;
  let fixture: ComponentFixture<CreateCardPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCardPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
