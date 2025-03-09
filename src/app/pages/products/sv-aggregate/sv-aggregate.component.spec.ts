import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvAggregateComponent } from './sv-aggregate.component';

describe('SvAggregateComponent', () => {
  let component: SvAggregateComponent;
  let fixture: ComponentFixture<SvAggregateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvAggregateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
