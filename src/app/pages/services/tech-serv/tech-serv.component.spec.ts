import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechServComponent } from './tech-serv.component';

describe('TechServComponent', () => {
  let component: TechServComponent;
  let fixture: ComponentFixture<TechServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechServComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
