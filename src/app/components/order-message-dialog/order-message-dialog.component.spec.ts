import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMessageDialogComponent } from './order-message-dialog.component';

describe('OrderMessageDialogComponent', () => {
  let component: OrderMessageDialogComponent;
  let fixture: ComponentFixture<OrderMessageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMessageDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderMessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
