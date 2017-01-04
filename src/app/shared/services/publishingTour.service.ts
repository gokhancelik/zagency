import { AuthService } from './../../security/auth.service';
import { PublishingTour, Tour, TourSchedulePrice,TourScheduleSpec } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class PublishingTourService extends BaseFirebaseService<PublishingTour> {
    constructor(private _af: AngularFireDatabase, private authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'publishingTours', fb);
    }
    fromJson(obj) {
        return PublishingTour.fromJson(obj);
    }
    fromJsonList(array) {
        return PublishingTour.fromJsonList(array);
    }
    update(key: string, value: PublishingTour): void {
        // let updData = {
        //     start: value.start.getTime(),
        //     end: value.end.getTime(),
        //     tour: value.tour,
        //     quota: value.quota,
        // };
        this._af.object(this.getRoute() + '/' + key).update(value);
    }

    add(value: PublishingTour) {
        this.authService.getUserInfo().take(1).subscribe(user => {
            if (user && user.user) {
                // let newData = {
                //     start: value.start.getTime(),
                //     end: value.end.getTime(),
                //     tour: value.tour,
                //     quota: value.quota,
                //     company: user[0].company,
                // };
                let newPostKey = this._af.list(this.getRoute()).push(null).key;
                let updates = {};
                updates[this.getRoute() + '/' + newPostKey] = value;
                updates['tourschedules/' + value.tourschedule + '/publishingtours/' + newPostKey] = true;
                super.firebaseUpdate(updates);
            }
        });
    }
    delete(key: string): void {
        this.getByKey(key).take(1).subscribe(
            data => {
                let updates = {};
                updates[this.getRoute() + '/' + key] = null;
                updates['/tourschedules/' + data.tourschedule + '/publishingtours/' + data.id] = null;
                super.firebaseUpdate(updates);
            }
        );
    }
   
}

