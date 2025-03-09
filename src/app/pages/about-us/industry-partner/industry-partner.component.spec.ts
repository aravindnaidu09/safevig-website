import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryPartnerComponent } from './industry-partner.component';

describe('IndustryPartnerComponent', () => {
  let component: IndustryPartnerComponent;
  let fixture: ComponentFixture<IndustryPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryPartnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
