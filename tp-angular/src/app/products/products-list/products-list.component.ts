import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'st-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[]; // remplir products avec les données du serveur

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllDocs().subscribe((docs) => {
      this.products = docs;
      // reçu la réponse
    console.log('reçu la réponse', this.products);
    });
    // envoyé la requête
    console.log('envoyé la requête', this.products);
  }

}
