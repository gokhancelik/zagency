import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PriceType } from '../../shared/models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class PriceTypeService {

    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/PriceTypes';
    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    constructor(private http: Http) { }

    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {TourType[]} The Observable for the HTTP request.
     */
    get(): Observable<PriceType[]> {
        return this.http.get(this.API_URL)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    add(data: PriceType): Observable<PriceType> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.API_URL, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getById(id: number): Observable<PriceType> {
        return this.http.get(this.API_URL + '/' + id).map(res => {
            let data = res.json();
            return data || new PriceType();
        });
    }
    delete(id: number): Observable<PriceType> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.API_URL + '/' + id, options)
            .catch(this.handleError);
    }
    update(data: PriceType, id: number): Observable<PriceType> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.API_URL + '/' + id, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
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

