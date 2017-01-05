import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireAuth, FirebaseRef } from 'angularfire2';
import { TourCategory } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
import { AuthService } from '../../security/auth.service';
import { Observable, Subject } from 'rxjs/Rx';
@Injectable()
export class TourCategoryService extends BaseFirebaseService<TourCategory> {
    sdkDb: any;
    constructor(private afAuth: AngularFireAuth,
        private _af: AngularFireDatabase,
         _authService: AuthService, @Inject(FirebaseRef) fb) {
        super(_af, 'tourCategories',_authService,fb);
        this.sdkDb = fb.database().ref();
    }
    fromJson(obj) {
        return TourCategory.fromJson(obj);
    }
    fromJsonList(array) {
        return TourCategory.fromJsonList(array);
    }
    getAll(): Observable<TourCategory[]> {
        const priceTypes$ = this._af.list('tourCategories')
            .map(this.fromJsonList);
        return priceTypes$;
    }
}
