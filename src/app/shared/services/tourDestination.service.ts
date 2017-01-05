import { AuthService } from './../../security/auth.service';
import { Tour, TourDestination } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourDestinationService extends BaseFirebaseService<TourDestination> {
    constructor(private _af: AngularFireDatabase, private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourDestinations', fb, _authService);
    }
   public fromJson(obj) {
        return TourDestination.fromJson(obj);
    }
  public  fromJsonList(array) {
        return TourDestination.fromJsonList(array);
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

