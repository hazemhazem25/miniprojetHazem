import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoituresComponent } from './list-voitures.component';

describe('ListVoituresComponent', () => {
  let component: ListVoituresComponent;
  let fixture: ComponentFixture<ListVoituresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVoituresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
