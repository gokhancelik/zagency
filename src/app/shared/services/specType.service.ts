import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SpecType } from '../../shared/models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BaseService } from '../../../app/core/index';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class SpecTypeService extends BaseService<SpecType> {

    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/SpecTypes';
    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    constructor(http: Http) {
        super(http, 'http://zagency.azurewebsites.net/api/v0.1/SpecTypes');
    }
}

