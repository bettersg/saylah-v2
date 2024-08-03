import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardPopupComponent } from './delete-card-popup.component';

describe('DeleteCardPopupComponent', () => {
  let component: DeleteCardPopupComponent;
  let fixture: ComponentFixture<DeleteCardPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCardPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
