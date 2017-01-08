import { Observable } from 'rxjs/Rx';
import { AuthService } from './../../security/auth.service';
import { Tour, TourSchedule, TourSchedulePrice, PriceType, CurrencyType } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourSchedulePriceService extends BaseFirebaseService<TourSchedulePrice> {
    constructor(private _af: AngularFireDatabase, private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourSchedulePrices', fb, _authService);
    }
    public fromJson(obj) {
        return TourSchedulePrice.fromJson(obj);
    }
    public fromJsonList(array) {
        return TourSchedulePrice.fromJsonList(array);
    }
    getByTourScheduleKey(tsKey): Observable<TourSchedulePrice[]> {
        const ts$ = this._af.list(this.getRoute(),
            { query: { orderByChild: 'tourSchedule', equalTo: tsKey } })
            .map(TourSchedulePrice.fromJsonList);
        return ts$;
    }
}

