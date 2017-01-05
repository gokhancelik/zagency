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
        private _authService: AuthService, @Inject(FirebaseRef) fb) {
        super(_af, 'roles', fb, _authService);
        this.sdkDb = fb.database().ref();
    }
    fromJson(obj) {
        return Role.fromJson(obj);
    }
    fromJsonList(array) {
        return Role.fromJsonList(array);
    }
}
