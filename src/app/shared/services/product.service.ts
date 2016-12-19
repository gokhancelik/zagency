import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Product, Photo } from '../models';
import { IService } from './IService.service';
import { BaseService } from '../../../app/core/index';

@Injectable()
export class ProductService extends BaseService<Product> {
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/Products';
    _http: Http;
    constructor(http: Http) {
        super(http, 'http://zagency.azurewebsites.net/api/v0.1/Products');
        this._http = http;
    }
    getPhotos(productBaseId: number): Observable<Photo[]> {
        return this._http.get(this.API_URL + '/' + productBaseId + '/Photos')
            .map(res => {
                let data = res.json();
                return data || {};
            })
            .catch(this.handleError);
    }
}


