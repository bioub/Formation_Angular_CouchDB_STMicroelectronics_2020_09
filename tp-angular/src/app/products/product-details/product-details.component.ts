import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'st-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  mainImageUrl: string;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    // PAS IDEAL si on click sur 2 lien et que la 2e réponse est reçu avant la 1ère === BUG
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   this.productService.getDocById(paramMap.get('productId')).subscribe((product) => {
    //     this.product = product;
    //   });
    // });

    // MIEUX
    this.activatedRoute.paramMap.pipe(
      switchMap((paramMap) => this.productService.getDocById(paramMap.get('productId')))
    ).subscribe((product) => {
      this.product = product;
      this.mainImageUrl = product.images[0];
    });
  }

  setMainImageUrl(imageUrl) {
    this.mainImageUrl = imageUrl;
  }

  checkmark(show) {
    return show ? "✓" : "✗";
  }
}
