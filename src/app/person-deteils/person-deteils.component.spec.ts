import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDeteilsComponent } from './person-deteils.component';

describe('PersonDeteilsComponent', () => {
  let component: PersonDeteilsComponent;
  let fixture: ComponentFixture<PersonDeteilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDeteilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
