import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaBeComponent } from './ba-be.component';

describe('BaBeComponent', () => {
  let component: BaBeComponent;
  let fixture: ComponentFixture<BaBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaBeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
