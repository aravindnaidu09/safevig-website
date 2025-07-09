import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLogosComponent } from './client-logos.component';

describe('ClientLogosComponent', () => {
  let component: ClientLogosComponent;
  let fixture: ComponentFixture<ClientLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientLogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
