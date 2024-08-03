import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedInterfacesComponent } from './saved-interfaces.component';

describe('SavedInterfacesComponent', () => {
  let component: SavedInterfacesComponent;
  let fixture: ComponentFixture<SavedInterfacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedInterfacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavedInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
