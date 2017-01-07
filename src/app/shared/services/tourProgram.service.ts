import { AuthService } from './../../security/auth.service';
import { TourSchedule, Tour, TourProgram } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourProgramService extends BaseFirebaseService<TourProgram> {
    constructor(private _af: AngularFireDatabase, private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourPrograms', fb, _authService);
    }
    public fromJson(obj) {
        return TourProgram.fromJson(obj);
    }
    public fromJsonList(array) {
        return TourProgram.fromJsonList(array);
    }
    public getByTourKey(tourKey): Observable<TourProgram[]> {
        // select * from tourSChedule where tourId = key;
        const ts$ = this._af.list(this.getRoute(),
            { query: { orderByChild: 'tour', equalTo: tourKey } })
            .map(TourProgram.fromJsonList);
        return ts$;
    }
}

