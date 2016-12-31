import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireAuth, FirebaseRef } from 'angularfire2';
import { CurrencyType } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
import { AuthService } from '../../security/auth.service';
import { Observable, Subject } from 'rxjs/Rx';
@Injectable()
export class CurrencyTypeService extends BaseFirebaseService<CurrencyType> {
    sdkDb: any;
    constructor(private afAuth: AngularFireAuth,
        private _af: AngularFireDatabase,
        private authService: AuthService, @Inject(FirebaseRef) fb) {
        super(_af, 'currencyTypes');
        this.sdkDb = fb.database().ref();
    }
    fromJson(obj) {
        return CurrencyType.fromJson(obj);
    }
    fromJsonList(array) {
        return CurrencyType.fromJsonList(array);
    }
    getAll(): Observable<CurrencyType[]> {
        const priceTypes$ = this._af.list('currencyTypes')
            .map(this.fromJsonList);
        return priceTypes$;
    }
}