import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';


import { PayService } from './pay.service';

describe('PayService', () => {
  let service: PayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]

    });
    service = TestBed.inject(PayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a observable', ()=>{
    const res = service.getPay();
    expect(typeof res).toBe('object');
  });

});
