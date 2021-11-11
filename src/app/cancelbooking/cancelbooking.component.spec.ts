import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelbookingComponent } from './cancelbooking.component';

describe('CancelbookingComponent', () => {
  let component: CancelbookingComponent;
  let fixture: ComponentFixture<CancelbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
