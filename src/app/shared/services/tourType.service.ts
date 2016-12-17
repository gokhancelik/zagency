import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { TourType } from '../models';
import { BaseService } from '../../../app/core/index';
@Injectable()
export class TourTypeService extends BaseService<TourType> {
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/TourTypes';
    _http: Http;
    constructor(http: Http) {
        super(http, 'http://zagency.azurewebsites.net/api/v0.1/TourTypes');
        this._http = http;
    }
}
