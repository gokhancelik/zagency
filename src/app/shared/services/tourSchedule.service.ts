import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TourSchedule } from '../models';
import { TourSchedulePrice } from '../../pages/tourSchedulePrice/tourSchedulePrice.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BaseService } from '../../../app/core/index';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class TourScheduleService extends BaseService<TourSchedule> {

    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/TourSchedules';
    _http: Http;
    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    constructor(http: Http) {
        super(http, 'http://zagency.azurewebsites.net/api/v0.1/TourSchedules');
        this._http = http;
    }

    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {TourSchedule[]} The Observable for the HTTP request.
     */
    getList(): Observable<TourSchedule[]> {
        return this._http.get(this.API_URL)
            .map(res => {
                let data = res.json();
                let list: Array<TourSchedule> = new Array<TourSchedule>();
                data.forEach(function (d) {
                    list.push(new TourSchedule(d));
                });
                return list || {};
            })
            .catch(this.handleError);
    }
    getTourSchedulePrices(tsId: number): Observable<TourSchedulePrice[]> {
        return this._http.get(this.API_URL + '/' + tsId + '/TourSchedulePrices')
            .map(res => {
                let data = res.json();
                return data || {};
            })
            .catch(this.handleError);
    }
    getById(id: number): Observable<TourSchedule> {
        return this._http.get(this.API_URL + '/' + id).map(res => {
            let data = res.json();
            let ts = new TourSchedule(data);
            return ts || new TourSchedule();
        });
    }
    getTourScheduleSpecs(tsId: number): Observable<TourSchedulePrice[]> {
        return this._http.get(this.API_URL + '/' + tsId + '/TourScheduleSpecs')
            .map(res => {
                let data = res.json();
                return data || {};
            })
            .catch(this.handleError);
    }
}

