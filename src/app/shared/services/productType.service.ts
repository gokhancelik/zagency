import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { ProductType } from '../models';
import { BaseService } from '../../../app/core/index';
@Injectable()
export class ProductTypeService extends BaseService<ProductType> {
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/ProductTypes';
    _http: Http;
    constructor(http: Http) {
        super(http, 'http://zagency.azurewebsites.net/api/v0.1/ProductTypes');
        this._http = http;
    }
}
