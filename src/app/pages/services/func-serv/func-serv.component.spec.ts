import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncServComponent } from './func-serv.component';

describe('FuncServComponent', () => {
  let component: FuncServComponent;
  let fixture: ComponentFixture<FuncServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncServComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
