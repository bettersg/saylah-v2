import { TestBed } from '@angular/core/testing';

import { EditCardAlertService } from './edit-card-alert.service';

describe('EditCardAlertService', () => {
  let service: EditCardAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCardAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
