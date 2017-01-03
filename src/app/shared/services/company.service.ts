import { CompanyServiceModel } from './../models/companyService.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2';
import { Company, CompanySpec, Tour, User } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
import { UserService } from '../services';
@Injectable()
export class CompanyService extends BaseFirebaseService<Company> {
    constructor(private _af: AngularFireDatabase) {
        super(_af, 'companies');
    }
    fromJson(obj) {
        return Company.fromJson(obj);
    }
    fromJsonList(array) {
        return Company.fromJsonList(array);
    }
    addTour(key: string, value: Tour) {
        this._af.object('companies/' + key + '/tours/' + value.id).set(true);
    }
    addUser(key: string, childKey: string) {
        this._af.object('companies/' + key + '/users/' + childKey).set(true);
    }
    removeUser(key: string, childKey: string) {
        this._af.object('companies/' + key + '/users/' + childKey).set(null);
    }
    getUsers(key: string): Observable<User[]> {
        const company$ = this._af.object('companies/' + key);
        return company$.switchMap(company => this._af.list('users',
            {
                query: { orderByChild: 'company', equalTo: company.$key }
            }));
    }
    getCompanySpec(key: String): Observable<CompanySpec[]> {
        const cs$ = this._af.list(`companySpecs/`,
            { query: { orderByChild: 'company', equalTo: key } })
            .map(CompanySpec.fromJsonList);
        return cs$;
    }
    getServices(key: string): Observable<CompanyServiceModel[]> {
        const cs$ = this._af.list(`companyServices/`,
            { query: { orderByChild: 'company', equalTo: key } })
            .map(CompanyServiceModel.fromJsonList);
        return cs$;
    }
}
