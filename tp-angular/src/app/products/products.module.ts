import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsSearchComponent } from './products-search/products-search.component';
import { ProductsCompareComponent } from './products-compare/products-compare.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AgGridModule } from 'ag-grid-angular';
import { ProductCellActionsComponent } from './products-list/product-cell-actions/product-cell-actions.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsSearchComponent,
    ProductsCompareComponent,
    ProductDetailsComponent,
    ProductCellActionsComponent,
  ],
  imports: [
    SharedModule,
    ButtonModule,
    AgGridModule.withComponents([]),
    ProgressSpinnerModule,
    ProductsRoutingModule,
  ],
})
export class ProductsModule {}
