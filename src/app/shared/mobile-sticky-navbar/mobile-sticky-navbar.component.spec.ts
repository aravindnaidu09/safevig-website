import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileStickyNavbarComponent } from './mobile-sticky-navbar.component';

describe('MobileStickyNavbarComponent', () => {
  let component: MobileStickyNavbarComponent;
  let fixture: ComponentFixture<MobileStickyNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileStickyNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileStickyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
