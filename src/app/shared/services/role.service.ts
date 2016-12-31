import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireAuth, FirebaseRef } from 'angularfire2';
import { Role } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
import { CompanyService } from './';
import { AuthService } from '../../security/auth.service';
import { Observable, Subject } from 'rxjs/Rx';
@Injectable()
export class RoleService extends BaseFirebaseService<Role> {
    sdkDb: any;
    constructor(private afAuth: AngularFireAuth,
        private _af: AngularFireDatabase, private companyService: CompanyService,
        private authService: AuthService, @Inject(FirebaseRef) fb) {
        super(_af, 'roles');
        this.sdkDb = fb.database().ref();
    }
    fromJson(obj) {
        return Role.fromJson(obj);
    }
    fromJsonList(array) {
        return Role.fromJsonList(array);
    }
    getAll(): Observable<Role[]> {
        const roles$ =  this._af.list('roles')
            .map(this.fromJsonList);
        return roles$;
    }
}
