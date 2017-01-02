import { AuthService } from './../../security/auth.service';
import { TourSchedule, Tour, TourProgram } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourProgramService extends BaseFirebaseService<TourProgram> {
    constructor(private _af: AngularFireDatabase, private authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourPrograms', fb);
    }
    fromJson(obj) {
        return TourProgram.fromJson(obj);
    }
    fromJsonList(array) {
        return TourProgram.fromJsonList(array);
    }
    update(key: string, value: TourProgram): void {
        let updData = {
            description: value.description,
            day: value.day,
            tour: value.tour
        };
        this._af.object(this.getRoute() + '/' + key).update(updData);
    }

    add(value: TourProgram) {
        this.authService.getUserInfo().take(1).subscribe(user => {
            if (user[0]) {
                let newData = {
                    description: value.description,
                    day: value.day,
                    tour: value.tour,
                    company: user[0].company,
                };
                let newPostKey = this._af.list(this.getRoute()).push(null).key;
                let updates = {};
                updates[this.getRoute() + '/' + newPostKey] = newData;
                updates['tours/' + newData.tour + '/programs/' + newPostKey] = true;
                super.firebaseUpdate(updates);
            }
        });
    }
    delete(key: string): void {
        this.getByKey(key).take(1).subscribe(
            data => {
                let updates = {};
                updates[this.getRoute() + key] = null;
                updates['/tours/' + data.tour + '/programs/' + data.id] = null;
                super.firebaseUpdate(updates);
            }
        );
    }
   
   
}

