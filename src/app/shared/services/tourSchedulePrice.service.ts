import { AuthService } from './../../security/auth.service';
import { Tour, TourSchedule, TourSchedulePrice,PriceType,CurrencyType } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourSchedulePriceService extends BaseFirebaseService<TourSchedulePrice> {
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

    add(value: TourSchedulePrice) {
        this.authService.getUserInfo().take(1).subscribe(user => {
            if (user[0]) {
                let newPostKey = this._af.list(this.getRoute()).push(null).key;
                let updates = {};
                updates[this.getRoute() + '/' + newPostKey] = value;
                updates['tourschedules/' + value.tourSchedule + '/prices/' + newPostKey] = true;
                super.firebaseUpdate(updates);
            }
        });
}
  delete(key: string): void {
        this.getByKey(key).take(1).subscribe(
            data => {
                let updates = {};
                updates[this.getRoute() + key] = null;
                updates['/tourschedules/' + data.tourSchedule + '/prices/' + data.id] = null;
                super.firebaseUpdate(updates);
            }
        );
    }
 getPriceTypes(key): Observable<PriceType[]> {
        const tsp$ = this._af.list(`priceTypes/`,
            { query: { orderByChild: 'tourSchedule', equalTo: key } })
            .map(TourSchedulePrice.fromJsonList);
        return tsp$;
    }
     getCurrencyTypes(key): Observable<CurrencyType[]> {
        const c$ = this._af.list(`currencytypes/`,
            { query: { orderByChild: 'tourSchedule', equalTo: key } })
            .map(TourSchedulePrice.fromJsonList);
        return c$;
    }
}

