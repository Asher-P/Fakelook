import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherFilterComponent } from './publisher-filter.component';

describe('PublisherFilterComponent', () => {
  let component: PublisherFilterComponent;
  let fixture: ComponentFixture<PublisherFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
