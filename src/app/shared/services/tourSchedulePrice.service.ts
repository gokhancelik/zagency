import { PriceTypeService } from './priceType.service';
import { CurrencyTypeService } from './currencyType.service';
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
        private currencyTypeService: CurrencyTypeService,
        private priceTypeService: PriceTypeService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourSchedulePrices', fb, _authService);
    }
    public mapRelationalObject(obj: TourSchedulePrice) {
        obj.currencyTypeObj = this.currencyTypeService.getByKey(obj.currency);
        obj.priceTypeObj = this.priceTypeService.getByKey(obj.priceType);
        return obj;
    }
    public fromJson(obj) {
        return TourSchedulePrice.fromJson(obj);
    }
    public fromJsonList(array) {
        return TourSchedulePrice.fromJsonList(array);
    }
    getByTourScheduleKey(tsKey): Observable<TourSchedulePrice[]> {
        let that = this;
        const ts$ = this._af.list(this.getRoute(),
            { query: { orderByChild: 'tourSchedule', equalTo: tsKey } })
            .map(this.fromJsonList)
            .map(ts => ts.map(t => { return that.mapRelationalObject(t); }));
        return ts$;
    }
}

