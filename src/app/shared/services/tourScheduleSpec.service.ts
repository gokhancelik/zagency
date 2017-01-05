import { AuthService } from './../../security/auth.service';
import { Tour, TourSchedule, TourScheduleSpec } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourScheduleSpecService extends BaseFirebaseService< TourScheduleSpec> {
    constructor(private _af: AngularFireDatabase, private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourSchedule', fb,_authService);
    }
   public fromJson(obj) {
        return TourScheduleSpec.fromJson(obj);
    }
   public fromJsonList(array) {
        return TourScheduleSpec.fromJsonList(array);
    }

}

