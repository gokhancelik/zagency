import { TourService } from './tour.service';
import { AuthService } from './../../security/auth.service';
import { Tour, TourDestination } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourDestinationService extends BaseFirebaseService<TourDestination> {
    constructor(private _af: AngularFireDatabase,
        private _authService: AuthService, private tourService: TourService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourDestinations', fb, _authService);
    }
    public mapRelationalObject(obj: TourDestination) {
        obj.tourObj = this.getTours(obj.tour);
        return obj;
    }
    public fromJson(obj) {
        return TourDestination.fromJson(obj);
    }
    public fromJsonList(array) {
        return TourDestination.fromJsonList(array);
    }
    public getByTourKey(tourKey): Observable<TourDestination[]> {
        // select * from TourDestination where tourId = key;
        const ts$ = this._af.list(this.getRoute(),
            { query: { orderByChild: 'tour', equalTo: tourKey } })
            .map(TourDestination.fromJsonList);
        return ts$;
    }
    public getAll(): Observable<TourDestination[]> {
        let that = this;
        const tourDestinationInTour$ = this._af.list(this.getRoute())
            .map(this.fromJsonList)
            .map(tourdestinations => {
                return tourdestinations.map(t => { return that.mapRelationalObject(t); });
            });

        return tourDestinationInTour$;
    }
    public getByKey(key): Observable<TourDestination> {
        let that = this;
        const tourDestination$ = this._af.object(this.getRoute() + '/' + key)
            .map(this.fromJson)
            .map(t => { return that.mapRelationalObject(t); });
        return tourDestination$;
    }

        public getTours(key): Observable<Tour[]> {
        const tp$ = this._af.list(`tours/`,
            { query: { orderByChild: 'tourDestination', equalTo: key } })
            .map(Tour.fromJsonList);
        return tp$;
    }

    public add(value: TourDestination) {
        this._authService.getUserInfo().take(1).subscribe(user => {
            if (user && user.user) {
                value = super.preparePreCreateByUser(value, user.user);
                let newPostKey = this._af.list(this.getRoute()).push(null).key;
                let updates = {};
                updates[this.getRoute() + '/' + newPostKey] = value;
                updates['tours/' + value.tour + '/destinations/' + newPostKey] = true;
                super.firebaseUpdate(updates);

            }
        });
    }

}

