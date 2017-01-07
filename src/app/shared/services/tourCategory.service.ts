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
        super(_af, 'tourCategories', fb, _authService);
        this.sdkDb = fb.database().ref();
    }
    public fromJson(obj) {
        return TourCategory.fromJson(obj);
    }
    public fromJsonList(array) {
        return TourCategory.fromJsonList(array);
    }
<<<<<<< HEAD
  public  getAll(): Observable<TourCategory[]> {
        const tourCategories$ = this._af.list('tourCategories')
=======
    public getAll(): Observable<TourCategory[]> {
        const priceTypes$ = this._af.list('tourCategories')
>>>>>>> c7f338164adac9070bc9ed6277b11adb477d03e9
            .map(this.fromJsonList);
        return tourCategories$;
    }
}
