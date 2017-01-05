import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireAuth, FirebaseRef } from 'angularfire2';
import { PriceType } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
import { AuthService } from '../../security/auth.service';
import { Observable, Subject } from 'rxjs/Rx';
@Injectable()
export class PriceTypeService extends BaseFirebaseService<PriceType> {
    sdkDb: any;
    constructor(private afAuth: AngularFireAuth,
        private _af: AngularFireDatabase,
        private _authService: AuthService, @Inject(FirebaseRef) fb) {
        super(_af, 'priceTypes', fb, _authService);
        this.sdkDb = fb.database().ref();
    }
    fromJson(obj) {
        return PriceType.fromJson(obj);
    }
    fromJsonList(array) {
        return PriceType.fromJsonList(array);
    }
}
