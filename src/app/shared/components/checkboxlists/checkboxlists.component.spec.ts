import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxlistsComponent } from './checkboxlists.component';

describe('CheckboxlistsComponent', () => {
  let component: CheckboxlistsComponent;
  let fixture: ComponentFixture<CheckboxlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxlistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
