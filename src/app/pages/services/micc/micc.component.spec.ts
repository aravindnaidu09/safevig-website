import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiccComponent } from './micc.component';

describe('MiccComponent', () => {
  let component: MiccComponent;
  let fixture: ComponentFixture<MiccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
