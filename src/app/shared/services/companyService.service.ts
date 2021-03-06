import { AuthService } from './../../security/auth.service';
import { CompanyServiceModel } from '../models';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class CompanyServiceService extends BaseFirebaseService<CompanyServiceModel> {
    constructor(private _af: AngularFireDatabase, private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'companyServices', fb, _authService);
    }
    fromJson(obj) {
        return CompanyServiceModel.fromJson(obj);
    }
    fromJsonList(array) {
        return CompanyServiceModel.fromJsonList(array);
    }
    add(value: CompanyServiceModel) {
        let newPostKey = this._af.list(this.getRoute()).push(null).key;
        let updates = {};
        updates[this.getRoute() + '/' + newPostKey] = value;
        updates['companies/' + value.company + '/services/' + newPostKey] = true;
        super.firebaseUpdate(updates);

    }
     delete(key: string) {
        this._authService.getUserInfo().subscribe(
            user => {
                if (user && user.user) {
                    let deleted = super.preparePreDeleteByUser(user.user);
                    let updates = {};
                    updates[this.getRoute() + '/' + key] = deleted;
                    updates['companies/' + user.user.company + '/services/' + key] = null;
                    super.firebaseUpdate(updates);
                }
            }
        );
    }
}

