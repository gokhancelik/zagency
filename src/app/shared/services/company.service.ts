import { AuthService } from './../../security/auth.service';
import { CompanyServiceModel } from './../models/companyService.model';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { Company, CompanySpec, Tour, User } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
import { UserService } from '../services';
@Injectable()
export class CompanyService extends BaseFirebaseService<Company> {
    constructor(private _af: AngularFireDatabase, private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'companies', fb, _authService);
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
    //Daha sonra gökhana sorulacak
    getAll(): Observable<Company[]> {
        if (this._authService.getUserInfo().map(user => user.role.name == 'superadmin')) {
            return this._af.list('companies', { query: { orderByChild: 'isDeleted', equalTo: false } })
                .map(this.fromJsonList);
        }
        if(this._authService.getUserInfo().map(user => user.role.name == 'companyadmin'))
        {
            return this._authService.getUserInfo().map(user=>user.user.companyObj).map(this.fromJsonList);
        }

    }
    getByRole(): Observable<Company[]> {
        let that = this;

        return that._authService.getUserInfo().map(user => {
            return {
                isAdmin: (user && user.user.roleObj.map(r => r.name === 'superadmin')),
                company: user.user.company
            }
        })
            .last()
            .flatMap(function (data) {
                if (data.isAdmin) {
                    return that._af.list(that.getRoute(),
                        { query: { orderByChild: 'isDeleted', equalTo: false } })
                        .map(that.fromJsonList);
                }
                else {
                    return that._af.list(that.getRoute(), { query: { orderByKey: true, equalTo: data.company } })
                        .map(that.fromJsonList);
                }
            });
    }

}
