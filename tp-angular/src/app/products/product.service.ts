import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product.model';
import { AllDocs } from './couchdb.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllDocs(): Observable<Product[]> {
    return this.httpClient
      .get<AllDocs<Product>>(
        'https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones/_all_docs?include_docs=true'
      )
      .pipe(map((data) => data.rows.map((row) => row.doc)));
  }

  getDocById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(
      'https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones/' + id
    );
  }
}
