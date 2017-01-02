import { AuthService } from './../../security/auth.service';
import { Tour, TourSchedule } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourService extends BaseFirebaseService<Tour> {
    constructor(private _af: AngularFireDatabase, private authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tours', fb);
    }
    fromJson(obj) {
        return Tour.fromJson(obj);
    }
    fromJsonList(array) {
        return Tour.fromJsonList(array);
    }
    add(value: Tour) {
        this.authService.getUserInfo().take(1).subscribe(user => {
            if (user[0]) {
                value.company = user[0].company;
                let newPostKey = this._af.list(this.getRoute()).push(null).key;
                let updates = {};
                updates[this.getRoute() + '/' + newPostKey] = value;
                value.id = newPostKey;
                updates['/companies/' + value.company + '/tours/' + newPostKey] = true;
                updates['/tourCategories/' + value.tourCategory + '/tours/' + newPostKey] = true;
                super.firebaseUpdate(updates);
            }
        });
    }
    delete(key: string) {
        this.getByKey(key).take(1).subscribe(
            data => {
                let updates = {};
                updates[this.getRoute() + '/' + key] = null;
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
}

