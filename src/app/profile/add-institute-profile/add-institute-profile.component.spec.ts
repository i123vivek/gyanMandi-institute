import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstituteProfileComponent } from './add-institute-profile.component';

describe('AddInstituteProfileComponent', () => {
  let component: AddInstituteProfileComponent;
  let fixture: ComponentFixture<AddInstituteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInstituteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstituteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
