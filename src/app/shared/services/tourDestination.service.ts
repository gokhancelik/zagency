import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { TourDestination } from '../models/tourDestination.model';
import { BaseService } from '../../../app/core/index';
@Injectable()
export class TourDestinationService extends BaseService<TourDestination> {
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/TourDestinations';
    _http: Http;
    constructor(http: Http) {
        super(http, 'http://zagency.azurewebsites.net/api/v0.1/TourDestinations');
        this._http = http;
    }
}
