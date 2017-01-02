import { AuthService } from './../../security/auth.service';
import { Tour, TourSchedule, TourSchedulePrice, PriceType, CurrencyType } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourSchedulePriceService extends BaseFirebaseService<TourSchedulePrice> {
    constructor(private _af: AngularFireDatabase, private authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourSchedulePrices', fb);
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
                updates['tourSchedules/' + value.tourSchedule + '/prices/' + newPostKey] = true;
                super.firebaseUpdate(updates);
            }
        });
    }
    delete(key: string): void {
        this.getByKey(key).take(1).subscribe(
            data => {
                let updates = {};
                updates[this.getRoute() + '/' + key] = null;
                updates['/tourSchedules/' + data.tourSchedule + '/prices/' + data.id] = null;
                super.firebaseUpdate(updates);
            }
        );
    }
}

