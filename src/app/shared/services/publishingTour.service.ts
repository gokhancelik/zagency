import { AuthService } from './../../security/auth.service';
import { PublishingTour, Tour, TourSchedulePrice, TourScheduleSpec } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class PublishingTourService extends BaseFirebaseService<PublishingTour> {
    constructor(private _af: AngularFireDatabase, private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'publishingTours', fb,_authService);
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
    updateratio(key: string, value: number): void {
        this._af.object(this.getRoute() + '/' + key).update({ ratio: value });
    }
    updateractive(key: string, value: boolean): void {
        this._af.object(this.getRoute() + '/' + key).update({ active: value });
    }

    add(value: PublishingTour) {

                let newPostKey = this._af.list(this.getRoute()).push(null).key;
                let updates = {};
                updates[this.getRoute() + '/' + newPostKey] = value;
                updates['tourschedules/' + value.tourschedule + '/publishingtours/' + newPostKey] = true;

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

