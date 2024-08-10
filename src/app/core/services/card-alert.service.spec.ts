import { TestBed } from '@angular/core/testing';

import { CardAlertService } from './card-alert.service';

describe('CardAlertService', () => {
  let service: CardAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
