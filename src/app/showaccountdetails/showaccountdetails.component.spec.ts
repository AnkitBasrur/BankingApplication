import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowaccountdetailsComponent } from './showaccountdetails.component';

describe('ShowaccountdetailsComponent', () => {
  let component: ShowaccountdetailsComponent;
  let fixture: ComponentFixture<ShowaccountdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowaccountdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowaccountdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
