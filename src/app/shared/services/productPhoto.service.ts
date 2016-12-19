import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProductPhoto } from '../models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BaseService } from '../../../app/core';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class ProductPhotoService extends BaseService<ProductPhoto> {

    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/ProductPhotos';
    _http: Http;
    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    constructor(http: Http) {
        super(http, 'http://zagency.azurewebsites.net/api/v0.1/ProductPhotos');
        this._http = http;
    }
    getByproductBaseId(productBaseId: number): Observable<ProductPhoto[]> {
        return this._http.get(this.API_URL + '/' + productBaseId + '/ProductPhotos')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
}

