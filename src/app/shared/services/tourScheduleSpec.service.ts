import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2';
import { TourScheduleSpec } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourScheduleSpecService extends BaseFirebaseService<TourScheduleSpec> {
    constructor(private _af: AngularFireDatabase) {
        super(_af, 'users');
    }
    fromJson(obj) {
        return TourScheduleSpec.fromJson(obj);
    }
    fromJsonList(array) {
        return TourScheduleSpec.fromJsonList(array);
    }
}
