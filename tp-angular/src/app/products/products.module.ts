import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsSearchComponent } from './products-search/products-search.component';
import { ProductsCompareComponent } from './products-compare/products-compare.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProductsListComponent, ProductsSearchComponent, ProductsCompareComponent, ProductDetailsComponent],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
