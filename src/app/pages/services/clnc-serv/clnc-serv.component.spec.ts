import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClncServComponent } from './clnc-serv.component';

describe('ClncServComponent', () => {
  let component: ClncServComponent;
  let fixture: ComponentFixture<ClncServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClncServComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClncServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
