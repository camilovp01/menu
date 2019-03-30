import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoeingComponent } from './boeing.component';

describe('BoeignComponent', () => {
  let component: BoeingComponent;
  let fixture: ComponentFixture<BoeingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoeingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
