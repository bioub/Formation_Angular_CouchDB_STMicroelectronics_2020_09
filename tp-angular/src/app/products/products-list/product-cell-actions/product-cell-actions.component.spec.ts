import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCellActionsComponent } from './product-cell-actions.component';

describe('ProductCellActionsComponent', () => {
  let component: ProductCellActionsComponent;
  let fixture: ComponentFixture<ProductCellActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCellActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCellActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
