import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TourPhoto } from '../models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BaseService } from '../../../app/core';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class TourPhotoService extends BaseService<TourPhoto> {

    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/TourPhotos';
    _http: Http;
    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    constructor(http: Http) {
        super(http, 'http://zagency.azurewebsites.net/api/v0.1/TourPhotos');
        this._http = http;
    }
    getByTourId(tourId: number): Observable<TourPhoto[]> {
        return this._http.get(this.API_URL + '/' + tourId + '/TourPhotos')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
}

