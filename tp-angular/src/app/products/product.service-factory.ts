import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';

export function productServiceFactory(httpClient: HttpClient): ProductService {
  console.log(httpClient);
  return new ProductService(httpClient);
}
