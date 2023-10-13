import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGovkitComponent } from './ngx-govkit.component';

describe('NgxGovkitComponent', () => {
  let component: NgxGovkitComponent;
  let fixture: ComponentFixture<NgxGovkitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxGovkitComponent]
    });
    fixture = TestBed.createComponent(NgxGovkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
