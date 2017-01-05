import { AuthService } from './../../security/auth.service';
import { B2B } from './../models/b2b.model';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class B2BService extends BaseFirebaseService<B2B> {
    constructor(private _af: AngularFireDatabase, private authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'b2bs', fb);
    }

    fromJson(obj) {
        return B2B.fromJson(obj);
    }
    fromJsonList(array) {
        return B2B.fromJsonList(array);
    }
    add(value: B2B): void {
        this.authService.getUserInfo().subscribe(
            user => {
                if (user && user.user) {
                    value.publisher = user.user.company;
                    value.publisher_name = user.user.company;//TODO name getir
                    let newPostKey = this._af.list('b2bs').push(null).key;
                    let updates = {};
                    updates['/b2bs/' + newPostKey] = value;
                    updates['/companies/' + user.user.company + '/b2bs/' + newPostKey] = true;
                    super.firebaseUpdate(updates);
                }
            }
        );
    }
}
