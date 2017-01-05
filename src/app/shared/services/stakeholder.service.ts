import { Stakeholder } from './../models/stakeholder.model';
import { AuthService } from './../../security/auth.service';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class StakeholderService extends BaseFirebaseService<Stakeholder> {
    constructor(private _af: AngularFireDatabase, private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'stakeholders', fb, _authService);
    }

    fromJson(obj) {
        return Stakeholder.fromJson(obj);
    }
    fromJsonList(array) {
        return Stakeholder.fromJsonList(array);
    }
    add(value: Stakeholder): void {
        let that = this;
        this._authService.getUserInfo().subscribe(
            user => {
                if (user && user.user) {
                    value.publisher = user.user.company;
                    value.publisherName = user.user.companyName;
                    value = super.preparePreCreateByUser(value, user.user);
                    let newPostKey = that._af.list(that.getRoute()).push(null).key;
                    let updates = {};
                    updates['/stakeholders/' + newPostKey] = value;
                    updates['/companies/' + user.user.company + '/distributors/' + newPostKey] = true;
                    super.firebaseUpdate(updates);
                }
            }
        );
    }
}
