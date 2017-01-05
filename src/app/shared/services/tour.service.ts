import { TourDestination } from './../models/tourDestination.model';
import { AuthService } from './../../security/auth.service';
import { Tour, TourSchedule, TourProgram } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourService extends BaseFirebaseService<Tour> {
    constructor(private _af: AngularFireDatabase,private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tours/', fb,_authService);
    }
    fromJson(obj) {
        return Tour.fromJson(obj);
    }
    fromJsonList(array) {
        return Tour.fromJsonList(array);
    }
   public add(value: Tour) {
        this._authService.getUserInfo().take(1).subscribe(user => {
            if (user && user.user) {
                value.company = user.user.company;
                let newPostKey = this._af.list(this.getRoute()).push(null).key;
                let updates = {};
                value=super.preparePreCreateByUser(value,user.user);
                updates[this.getRoute() + '/' + newPostKey] = value;
                value.id = newPostKey;
                updates['/companies/' + value.company + '/tours/' + newPostKey] = true;
                updates['/tourCategories/' + value.tourCategory + '/tours/' + newPostKey] = true;
                super.firebaseUpdate(updates);
            }
        });
    }
   public delete(key: string) {
        this.getByKey(key).take(1).subscribe(
            data => {
                let updates = {};
                let value=super.preparePreDelete();
                updates[this.getRoute() + '/' + key] = value;
                updates['/companies/' + data.company + '/tours/' + data.id] = null;
                updates['/tourCategories/' + data.tourCategory + '/tours/' + data.id] = null;
                this.getTourSchedules(key).take(1).subscribe(
                    tss => {
                        tss.forEach(ts => {
                            updates['/tourSchedules/' + ts.id] = null;
                        });
                        super.firebaseUpdate(updates);
                    }
                );
            }
        );
    }
    getTourSchedules(key): Observable<TourSchedule[]> {
        // select * from tourSChedule where tourId = key;
        const ts$ = this._af.list(`tourSchedules/`,
            { query: { orderByChild: 'tour', equalTo: key } })
            .map(TourSchedule.fromJsonList);
        return ts$;
    }
    getTourPrograms(key): Observable<TourProgram[]> {
        const tp$ = this._af.list(`tourPrograms/`,
            { query: { orderByChild: 'tour', equalTo: key } })
            .map(TourProgram.fromJsonList);
        return tp$;
    }
    getTourDestinations(key): Observable<TourDestination[]> {
        const td$ = this._af.list(`tourDestinations/`,
            { query: { orderByChild: 'tour', equalTo: key } })
            .map(TourDestination.fromJsonList);
        return td$;
    }
}

