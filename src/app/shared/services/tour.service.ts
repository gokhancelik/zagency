import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { TourProgram, TourPhoto, Tour, TourSchedule, TourDestination } from '../models';
import { IService } from './IService.service';
import { BaseService } from '../../../app/core/index';

@Injectable()
export class TourService extends BaseService<Tour> {
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/Tours';
    _http: Http;
    constructor(http: Http) {
        super(http, 'http://zagency.azurewebsites.net/api/v0.1/Tours');
        this._http = http;
    }
    getTourSchedules(tourId: number): Observable<TourSchedule[]> {
        return this._http.get(this.API_URL + '/' + tourId + '/tourschedules')
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
    getDraftTours(): Observable<Tour[]> {
        return this._http.get(this.API_URL + '/Drafts').map(this.extractData);
    }
    publish(data: Tour, id: number): Observable<Tour> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this.API_URL + '/publish/' + id, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getTourPrograms(tourId: number): Observable<TourProgram[]> {
        return this._http.get(this.API_URL + '/' + tourId + '/TourPrograms')
            .map(res => {
                let data = res.json();
                return data || {};
            })
            .catch(this.handleError);
    }
    getTourPhotos(tourId: number): Observable<TourPhoto[]> {
        return this._http.get(this.API_URL + '/' + tourId + '/TourPhotos')
            .map(res => {
                let data = res.json();
                return data || {};
            })
            .catch(this.handleError);
    }
    getTourDestinations(tourId: number): Observable<TourDestination[]> {
        return this._http.get(this.API_URL + '/' + tourId + '/TourDestinations')
            .map(res => {
                let data = res.json();
                return data || {};
            })
            .catch(this.handleError);
    }
}


