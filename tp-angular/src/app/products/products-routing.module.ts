import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsCompareComponent } from './products-compare/products-compare.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsSearchComponent } from './products-search/products-search.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
    data: {
      title: 'Product List',
    }
  },
  {
    path: 'products/search',
    component: ProductsSearchComponent,
    data: {
      title: 'Product Search'
    }
  },
  {
    path: 'products/compare',
    component: ProductsCompareComponent,
    data: {
      title: 'Product Compare'
    }
  },
  {
    path: 'products/:productId',
    // matcher:
    component: ProductDetailsComponent,
    data: {
      title: 'Product Details'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
