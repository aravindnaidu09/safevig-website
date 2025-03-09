import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvAgreementComponent } from './sv-agreement.component';

describe('SvAgreementComponent', () => {
  let component: SvAgreementComponent;
  let fixture: ComponentFixture<SvAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvAgreementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
