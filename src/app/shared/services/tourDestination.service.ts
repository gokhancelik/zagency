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
<<<<<<< HEAD
     private _authService: AuthService,
        @Inject(FirebaseRef) fb
      ) {
=======
        private _authService: AuthService,
        @Inject(FirebaseRef) fb,
        private tourService: TourService) {
>>>>>>> b5e4d3792c5b656bd1b55d1bd561be395d6373b4
        super(_af, 'tourDestinations', fb, _authService);
    }
    public mapRelationalObject(obj: TourDestination) {
        obj.tourObj = this.tourService.getByKey(obj.tour);
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
        const tourDestinationInTour$ =  this._af.list(this.getRoute())
        .map(this.fromJsonList)
        .map(tourdestinations => {
                return tourdestinations.map(t => { return that.mapRelationalObject(t); });
            });

        return tourDestinationInTour$;
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

