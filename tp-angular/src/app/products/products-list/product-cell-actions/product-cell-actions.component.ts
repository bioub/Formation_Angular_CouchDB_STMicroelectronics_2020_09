import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'st-product-cell-actions',
  templateUrl: './product-cell-actions.component.html',
  styleUrls: ['./product-cell-actions.component.scss']
})
export class ProductCellActionsComponent implements OnInit, ICellRendererAngularComp {

  id: string;

  constructor() { }
  refresh(params: any): boolean {
    return false;
  }
  agInit(params: ICellRendererParams): void {
    this.id = params.value;
  }

  ngOnInit(): void {
  }


}
