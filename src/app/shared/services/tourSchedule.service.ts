import { Order } from './../models/order.model';
import { AuthService } from './../../security/auth.service';
import { TourSchedule, Tour, TourSchedulePrice, TourScheduleSpec, PublishingTour } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourScheduleService extends BaseFirebaseService<TourSchedule> {
    constructor(private _af: AngularFireDatabase,
        private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourSchedules', fb, _authService);
    }
    public fromJson(obj) {
        return TourSchedule.fromJson(obj);
    }
    public fromJsonList(array) {
        return TourSchedule.fromJsonList(array);
    }
    public getTourSchedulePrices(key): Observable<TourSchedulePrice[]> {
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
            .map(Order.fromJsonList);
        return ts$;
    }
    public getByTourKey(tourKey): Observable<TourSchedule[]> {
        // select * from tourSChedule where tourId = key;
        const ts$ = this._af.list(this.getRoute(),
            { query: { orderByChild: 'tour', equalTo: tourKey } })
            .map(TourSchedule.fromJsonList);
        return ts$;
    }
}

