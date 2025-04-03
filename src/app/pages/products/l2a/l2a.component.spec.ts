import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2aComponent } from './l2a.component';

describe('L2aComponent', () => {
  let component: L2aComponent;
  let fixture: ComponentFixture<L2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L2aComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
