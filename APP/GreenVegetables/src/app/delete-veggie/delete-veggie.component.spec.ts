import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVeggieComponent } from './delete-veggie.component';

describe('DeleteVeggieComponent', () => {
  let component: DeleteVeggieComponent;
  let fixture: ComponentFixture<DeleteVeggieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVeggieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVeggieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
