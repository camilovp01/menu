import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbusComponent } from './airbus.component';

describe('AirbusComponent', () => {
  let component: AirbusComponent;
  let fixture: ComponentFixture<AirbusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirbusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
