import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCardPopupComponent } from './update-card-popup.component';

describe('UpdateCardPopupComponent', () => {
  let component: UpdateCardPopupComponent;
  let fixture: ComponentFixture<UpdateCardPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCardPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
