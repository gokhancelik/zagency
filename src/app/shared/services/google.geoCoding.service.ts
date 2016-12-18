import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class GoogleGeoCodingService {

    constructor(private http: Http) { }
    search(address: string) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' +
            address + '&key=AIzaSyB0JcBC6UqwkzeUE1T5PVATj0KhUP-Ohsg')
            .map(res => {
                let data = res.json();
                return data.results || {};
            });
    }
}
