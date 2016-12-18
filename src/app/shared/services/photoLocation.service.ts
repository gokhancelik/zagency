import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PhotoLocation } from '../../shared/models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BaseService } from '../../../app/core/index';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class PhotoLocationService extends BaseService<PhotoLocation> {

    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/PhotoLocationTypes';
    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    constructor(http: Http) {
        super(http, 'http://zagency.azurewebsites.net/api/v0.1/PhotoLocationTypes');
    }
}

