import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvSignalComponent } from './sv-signal.component';

describe('SvSignalComponent', () => {
  let component: SvSignalComponent;
  let fixture: ComponentFixture<SvSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
