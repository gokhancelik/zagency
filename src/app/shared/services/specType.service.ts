import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireAuth, FirebaseRef } from 'angularfire2';
import { SpecType } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
import { AuthService } from '../../security/auth.service';
import { Observable, Subject } from 'rxjs/Rx';
@Injectable()
export class SpecTypeService extends BaseFirebaseService<SpecType> {
    sdkDb: any;
    constructor(private afAuth: AngularFireAuth,
        private _af: AngularFireDatabase,
        private authService: AuthService, @Inject(FirebaseRef) fb) {
        super(_af, 'specTypes');
        this.sdkDb = fb.database().ref();
    }
    fromJson(obj) {
        return SpecType.fromJson(obj);
    }
    fromJsonList(array) {
        return SpecType.fromJsonList(array);
    }
    getAll(): Observable<SpecType[]> {
        const priceTypes$ = this._af.list('specTypes')
            .map(this.fromJsonList);
        return priceTypes$;
    }
}