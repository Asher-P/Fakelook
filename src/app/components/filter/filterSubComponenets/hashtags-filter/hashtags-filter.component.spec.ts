import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagsFilterComponent } from './hashtags-filter.component';

describe('HashtagsFilterComponent', () => {
  let component: HashtagsFilterComponent;
  let fixture: ComponentFixture<HashtagsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
