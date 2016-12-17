import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TourSchedulePrice } from '../../pages/tourSchedulePrice/tourSchedulePrice.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class TourSchedulePriceService {

    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/TourSchedulePrices';
    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    constructor(private http: Http) { }

    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {TourSchedule[]} The Observable for the HTTP request.
     */
    get(): Observable<TourSchedulePrice[]> {
        return this.http.get(this.API_URL)
            .map(res => {
                let data = res.json();
                return data || {};
            })
            .catch(this.handleError);
    }
    getById(id: number): Observable<TourSchedulePrice> {
        return this.http.get(this.API_URL + '/' + id).map(res => {
            let data = res.json();
            return data || new TourSchedulePrice();
        });
    }
    add(data: TourSchedulePrice): Observable<TourSchedulePrice> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.API_URL, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    delete(id: number): Observable<TourSchedulePrice> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.API_URL + '/' + id, options)
            .catch(this.handleError);
    }
    update(data: TourSchedulePrice, id: number): Observable<TourSchedulePrice> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.API_URL + '/' + id, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let data = res.json();
        return data || {};
    }
    /**
      * Handle HTTP error
      */
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

