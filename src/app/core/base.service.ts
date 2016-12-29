import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IModel } from '../models/IModel';
import 'rxjs/add/operator/catch';
import { IService } from './IService.service';
import { Injectable } from '@angular/core';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
export abstract class BaseService<IModel> implements IService<IModel>{

    API_URL: string = '';
    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    constructor(private http: Http, private apiUrl: string) {
        this.API_URL = apiUrl;
    }
    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {TourSchedule[]} The Observable for the HTTP request.
     */
    getAll(): Observable<IModel[]> {
        return this.http.get(this.API_URL)
            .map(res => {
                let data = res.json();
                return data || {};
            })
            .catch(this.handleError);
    }
    getByKey(id: number): Observable<IModel> {
        return this.http.get(this.API_URL + '/' + id).map(res => {
            let data = res.json();
            return data;
        });
    }
    add(data: IModel) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.API_URL, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    delete(id: number) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.delete(this.API_URL + '/' + id, options)
            .catch(this.handleError);
    }
    update(id: number, data: IModel) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.put(this.API_URL + '/' + id, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    extractData(res: Response) {
        let data = res.json();
        return data || {};
    }
    /*
      Handle HTTP error
      */
    handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
