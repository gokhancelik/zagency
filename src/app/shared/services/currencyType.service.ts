import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireAuth, FirebaseRef } from 'angularfire2';
import { CurrencyType } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
import { AuthService } from '../../security/auth.service';
import { Observable, Subject } from 'rxjs/Rx';
@Injectable()
export class CurrencyTypeService extends BaseFirebaseService<CurrencyType> {
    constructor(private afAuth: AngularFireAuth,
        private _af: AngularFireDatabase,
        private _authService: AuthService, @Inject(FirebaseRef) fb) {
        super(_af, 'currencyTypes', fb, _authService);
    }
    fromJson(obj) {
        return CurrencyType.fromJson(obj);
    }
    fromJsonList(array) {
        return CurrencyType.fromJsonList(array);
    }
}
