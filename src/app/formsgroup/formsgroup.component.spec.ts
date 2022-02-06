import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsgroupComponent } from './formsgroup.component';

describe('FormsgroupComponent', () => {
  let component: FormsgroupComponent;
  let fixture: ComponentFixture<FormsgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
