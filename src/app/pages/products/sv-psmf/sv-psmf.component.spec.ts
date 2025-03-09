import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvPsmfComponent } from './sv-psmf.component';

describe('SvPsmfComponent', () => {
  let component: SvPsmfComponent;
  let fixture: ComponentFixture<SvPsmfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvPsmfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvPsmfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
