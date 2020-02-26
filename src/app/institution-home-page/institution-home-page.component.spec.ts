import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionHomePageComponent } from './institution-home-page.component';

describe('InstitutionHomePageComponent', () => {
  let component: InstitutionHomePageComponent;
  let fixture: ComponentFixture<InstitutionHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
