import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product';
import { map } from 'rxjs/operators';

@Injectable()

// Service for products data.
export class ProductService {

    // We need Http to talk to a remote server.
    constructor(private _http: Http) { }

    // Get list of products from remote server.
    readProducts(): Observable<Product[]> {

        return this._http
            .get('http://localhost/php-api-codeofaninja/api/product/read.php')
            .pipe(map((res: Response) => res.json()));
    }

    // Send product data to remote server to create it.
    createProduct(product): Observable<Product> {

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this._http.post(
            'http://localhost/php-api-codeofaninja/api/product/create.php',
            product,
            options
        ).pipe(map((res: Response) => res.json()));
    }
}
