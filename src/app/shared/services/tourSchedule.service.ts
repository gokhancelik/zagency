import { AuthService } from './../../security/auth.service';
import { TourSchedule, Tour, TourSchedulePrice } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourScheduleService extends BaseFirebaseService<TourSchedule> {
    constructor(private _af: AngularFireDatabase, private authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourSchedules', fb);
    }
    fromJson(obj) {
        return TourSchedule.fromJson(obj);
    }
    fromJsonList(array) {
        return TourSchedule.fromJsonList(array);
    }
    update(key: string, value: TourSchedule): void {
        let updData = {
            start: value.start.getTime(),
            end: value.end.getTime(),
            tour: value.tour,
            quota: value.quota,
        };
        this._af.object(this.getRoute() + '/' + key).update(updData);
    }

    add(value: TourSchedule) {
        this.authService.getUserInfo().take(1).subscribe(user => {
            if (user[0]) {
                let newData = {
                    start: value.start.getTime(),
                    end: value.end.getTime(),
                    tour: value.tour,
                    quota: value.quota,
                    company: user[0].company,
                };
                let newPostKey = this._af.list(this.getRoute()).push(null).key;
                let updates = {};
                updates[this.getRoute() + '/' + newPostKey] = newData;
                updates['tours/' + newData.tour + '/schedules/' + newPostKey] = true;
                super.firebaseUpdate(updates);
            }
        });
    }
    delete(key: string): void {
        this.getByKey(key).take(1).subscribe(
            data => {
                let updates = {};
                updates[this.getRoute() + key] = null;
                updates['/tours/' + data.tour + '/schedules/' + data.id] = null;
                super.firebaseUpdate(updates);
            }
        );
    }
    getTourSchedulePrices(key): Observable<TourSchedulePrice[]> {
        // select * from tourscheduleprice where tourScheduleId = key
        const ts$ = this._af.list(`tourSchedulePrices/`,
            { query: { orderByChild: 'tourSchedule', equalTo: key } })
            .map(TourSchedulePrice.fromJsonList);
        return ts$;
    }
    // getTourSchedulePrices(tsId: number): Observable<TourSchedulePrice[]> {
    //     return this._af.list('tourSchedules')
    // }
    // getTourScheduleSpecs(tsId: number): Observable<TourSchedulePrice[]> {
    //     return this._http.get(this.API_URL + '/' + tsId + '/TourScheduleSpecs')
    //         .map(res => {
    //             let data = res.json();
    //             return data || {};
    //         })
    //         .catch(this.handleError);
    // }
}

