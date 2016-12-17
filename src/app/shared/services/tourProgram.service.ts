import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { TourProgram } from '../models/tourProgram.model';
import { BaseService } from '../../../app/core/index';
@Injectable()
export class TourProgramService extends BaseService<TourProgram> {
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/TourPrograms';
    _http: Http;
    constructor(http: Http) {
        super(http, 'http://zagency.azurewebsites.net/api/v0.1/TourPrograms');
        this._http = http;
    }
}
