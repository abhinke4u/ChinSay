import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVeggieComponent } from './update-veggie.component';

describe('UpdateVeggieComponent', () => {
  let component: UpdateVeggieComponent;
  let fixture: ComponentFixture<UpdateVeggieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVeggieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVeggieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
