import { AuthService } from './../../security/auth.service';
import {  Tour, TourDestination } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourDestinationService extends BaseFirebaseService<TourDestination> {
    constructor(private _af: AngularFireDatabase, private authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourDestinations', fb);
    }
    fromJson(obj) {
        return TourDestination.fromJson(obj);
    }
    fromJsonList(array) {
        return TourDestination.fromJsonList(array);
    }
    update(key: string, value: TourDestination): void {
        let updData = {
            name: value.name,
            latitude: value.latitude,
            longitude: value.longitude,
            tour: value.tour
        };
        this._af.object(this.getRoute() + '/' + key).update(updData);
    }

    add(value: TourDestination) {
        // this.authService.getUserInfo().take(1).subscribe(user => {
        //     if (user[0]) {
                // let newData = {
                //     description: value.description,
                //     day: value.day,
                //     tour: value.tour,
                //     company: user[0].company,
                // };
                let newPostKey = this._af.list(this.getRoute()).push(null).key;
                let updates = {};
                updates[this.getRoute() + '/' + newPostKey] = value;
                updates['tours/' + value.tour + '/destinations/' + newPostKey] = true;
                super.firebaseUpdate(updates);

    }
    delete(key: string): void {
        this.getByKey(key).take(1).subscribe(
            data => {
                let updates = {};
                updates[this.getRoute() + key] = null;
                updates['/tours/' + data.tour + '/destinations/' + data.id] = null;
                super.firebaseUpdate(updates);
            }
        );
    }

}

