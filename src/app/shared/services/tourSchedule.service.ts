import { AuthService } from './../../security/auth.service';
import { TourSchedule, Tour, TourSchedulePrice, TourScheduleSpec, PublishingTour } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourScheduleService extends BaseFirebaseService<TourSchedule> {
    constructor(private _af: AngularFireDatabase, private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourSchedules', fb, _authService);
    }
   public fromJson(obj) {
        return TourSchedule.fromJson(obj);
    }
    public fromJsonList(array) {
        return TourSchedule.fromJsonList(array);
    }
    public update(key: string, value: TourSchedule): void {
        this._authService.getUserInfo().take(1).subscribe(user => {
            if (user && user.user) {
                let updates = {};
                value = super.preparePreModifyByUser(value, user.user);
                this.getPublishingTours(value.id).take(1).subscribe(
                    tss => {
                        tss.forEach(ts => {
                            updates['/publishingTours/' + ts.id + '/tourSchedule/tourScheduleStart'] = value.start;
                            updates['/publishingTours/' + ts.id + '/tourSchedule/tourScheduleEnd'] = value.end;

                        });
                    }
                );
                this.getOrders(value.id).take(1).subscribe(
                    ord => {
                        ord.forEach(or => {
                            updates['/orders/' + or.id + '/tourSchedule/tourScheduleStart'] = value.start;
                            updates['/orders/' + or.id + '/tourSchedule/tourScheduleEnd'] = value.end;

                        });
                    }
                );
                super.firebaseUpdate(updates);

            }
        });
    }

    
  public  getTourSchedulePrices(key): Observable<TourSchedulePrice[]> {
        // select * from tourscheduleprice where tourScheduleId = key
        const ts$ = this._af.list(`tourSchedulePrices/`,
            { query: { orderByChild: 'tourSchedule', equalTo: key } })
            .map(TourSchedulePrice.fromJsonList);
        return ts$;
    }
    public getTourScheduleSpecs(key): Observable<TourScheduleSpec[]> {
        // select * from tourschedulespecwhere tourScheduleId = key
        const tss$ = this._af.list(`tourScheduleSpecs/`,
            { query: { orderByChild: 'tourSchedule', equalTo: key } })
            .map(TourScheduleSpec.fromJsonList);
        return tss$;
    }


    public getPublishingTours(key): Observable<PublishingTour[]> {
        // select * from tourscheduleprice where tourScheduleId = key
        const ts$ = this._af.list(`publishingTours/`,
            { query: { orderByChild: 'tourSchedule', equalTo: key } })
            .map(PublishingTour.fromJsonList);
        return ts$;
    }
   public getOrders(key): Observable<Order[]> {
        // select * from tourscheduleprice where tourScheduleId = key
        const ts$ = this._af.list(`orders/`,
            { query: { orderByChild: 'tourSchedule', equalTo: key } })
            .map(PublishingTour.fromJsonList);
        return ts$;
    }

}

