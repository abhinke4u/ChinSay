import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVeggieComponent } from './add-veggie.component';

describe('AddVeggieComponent', () => {
  let component: AddVeggieComponent;
  let fixture: ComponentFixture<AddVeggieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVeggieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVeggieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
