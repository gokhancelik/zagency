import { TourService } from './tour.service';
import { AuthService } from './../../security/auth.service';
import { TourSchedule, Tour, TourProgram } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourProgramService extends BaseFirebaseService<TourProgram> {
    constructor(private _af: AngularFireDatabase,private tourService:TourService, private _authService: AuthService,
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
       public getByKey(key): Observable<TourProgram> {
        let that = this;
        const tourProgram$ = this._af.object(this.getRoute() + '/' + key)
            .map(this.fromJson)
            .map(t => { return that.mapRelationalObject(t); });
        return tourProgram$;
    }
     public mapRelationalObject(obj: TourProgram) {
        obj.tourObj = this.tourService.getByKey(obj.tour);
        return obj;
    }
  
}

