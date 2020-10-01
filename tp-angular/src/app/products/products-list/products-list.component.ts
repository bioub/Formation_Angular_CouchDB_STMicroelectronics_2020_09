import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ProductCellActionsComponent } from './product-cell-actions/product-cell-actions.component';

@Component({
  selector: 'st-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[]; // remplir products avec les données du serveur

  columnDefs: ColDef[] = [
    { field: '_id', pinned: 'left', lockPinned: true, lockPosition: true, checkboxSelection: true },
    { field: 'name', flex: 1 },
    { field: 'additionalFeatures', flex: 2 },
    { headerName: 'actions', field: '_id', cellRendererFramework: ProductCellActionsComponent, sortable: false}
  ];

  defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllDocs().subscribe((docs) => {
      this.products = docs;
    });
  }
}

//         ^
//         |
//     HttpHandler
//         ^
//         |
//     HttpClient
//         ^
//         |
//   ProductService
//         ^
//         |
// ProductsListComponent
