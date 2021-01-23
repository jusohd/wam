import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GatewayComponent } from './gateway.component';

describe('GatewayComponent', () => {
  let component: GatewayComponent;
  let fixture: ComponentFixture<GatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GatewayComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event when click pay button', fakeAsync(() => {
    spyOn(component, 'pay');
    const button = fixture.debugElement.query(By.css('#btnPay')).nativeElement;
    button.click();

    fixture.whenStable().then(() => {
      expect(component.pay).toHaveBeenCalled();
    })
  }));
});
