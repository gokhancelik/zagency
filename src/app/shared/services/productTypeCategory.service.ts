import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { ProductTypeCategory } from '../models';
import { BaseService } from '../../../app/core/index';
@Injectable()
export class ProductTypeCategoryService extends BaseService<ProductTypeCategory> {
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/ProductTypeCategories';
    _http: Http;
    constructor(http: Http) {
        super(http, 'http://zagency.azurewebsites.net/api/v0.1/ProductTypeCategories');
        this._http = http;
    }
}
