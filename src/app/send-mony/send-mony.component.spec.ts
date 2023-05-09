import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMonyComponent } from './send-mony.component';

describe('SendMonyComponent', () => {
  let component: SendMonyComponent;
  let fixture: ComponentFixture<SendMonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
